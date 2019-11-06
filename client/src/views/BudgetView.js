import React, { useState, useEffect, useRef } from 'react';
import { TimelineMax } from 'gsap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Record from 'components/molecules/Record/Record';
import Heading from 'components/atoms/Heading/Heading';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import plusIcon from 'assets/svg/plus.svg';
import AddItemForm from 'components/organisms/AddItemForm/AddItemForm';
import Spinner from 'components/atoms/Spinner/Spinner';
import { combineFetching, deleteItem as deleteItemAction } from 'actions';

const StyledTopWrapper = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.lightGrey1};
  padding: 30px;
  margin-bottom: 3rem;
  box-shadow: 0px 15px 30px -25px rgba(0, 0, 0, 0.2);
`;

const StyledHeading = styled(Heading)`
  text-transform: uppercase;
  text-align: center;
`;

const StyledBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  width: 20rem;
  background: ${({ theme, expense }) =>
    expense ? theme.expense : theme.income};
  color: #fff;
  border-radius: 3px;

  :nth-child(1) {
    margin-right: 5rem;
  }
`;

const StyledFlexWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  :nth-child(1) {
    margin-right: 3rem;
  }
`;

const StyledInnerWrapper = styled.div`
  width: 100%;
  text-align: center;
`;

const StyledButtonIcon = styled(ButtonIcon)`
  position: fixed;
  bottom: 40px;
  right: 40px;
  background-color: ${({ theme }) => theme.lightGrey1};
  background-size: 35%;
  border-radius: 5rem;
  z-index: 10000;
`;

const BudgetView = ({
  income,
  expense,
  loading,
  parallelFetch,
  deleteItem,
}) => {
  const header = useRef(null);
  const incomeBox = useRef(null);
  const expenseBox = useRef(null);
  const plusIconBox = useRef(null);

  const tl = useRef();

  useEffect(() => {
    parallelFetch();

    tl.current = new TimelineMax()
      .from(header.current, 0.5, {
        opacity: 0,
        y: '-2vw',
      })
      .from(incomeBox.current, 0.5, { opacity: 0, x: '-2vw' })
      .from(expenseBox.current, 0.5, { opacity: 0, x: '2vw' }, '-=0.5')
      .from(plusIconBox.current, 0.5, { opacity: 0, x: '5vw' });
  }, [parallelFetch]);

  const [isModalVisible, setModalVisibility] = useState(false);

  const handleFormToggle = () => setModalVisibility(!isModalVisible);

  const generateList = (arr, type) => {
    let element;
    if (arr.length) {
      element = arr.map(item => (
        <Record
          deleteRecord={() => deleteItem(item._id, type)}
          key={item._id}
          data={item}
          hover
          icon={plusIcon}
          rotate
          display
        />
      ));
    } else {
      if (arr.length) {
        element = <Spinner />;
      } else {
        element = <div>no data</div>;
      }
    }
    return element;
  };

  const calcBudget = arr => {
    return arr.length
      ? `${arr.reduce((acc, curr) => acc + curr.cash, 0)} zł`
      : '-';
  };

  return (
    <>
      <StyledTopWrapper>
        <StyledHeading ref={header}>Budget Calculations</StyledHeading>
        <StyledFlexWrapper>
          <StyledBox ref={incomeBox}>
            <div>Income</div>
            <div>
              {income.length ? (
                `${calcBudget(income)} zł`
              ) : income.length ? (
                <Spinner small white />
              ) : (
                <div>-</div>
              )}{' '}
            </div>
          </StyledBox>
          <StyledBox expense ref={expenseBox}>
            <div>Expense</div>
            <div>
              {expense.length ? calcBudget(expense) : <Spinner small white />}{' '}
              zł
            </div>
          </StyledBox>
        </StyledFlexWrapper>
      </StyledTopWrapper>
      <StyledFlexWrapper>
        <StyledColumnWrapper>
          <StyledInnerWrapper>
            {generateList(income, 'income')}
          </StyledInnerWrapper>
        </StyledColumnWrapper>
        <StyledColumnWrapper>
          <StyledInnerWrapper>
            {generateList(expense, 'expense')}
          </StyledInnerWrapper>
        </StyledColumnWrapper>
      </StyledFlexWrapper>
      <AddItemForm isVisible={isModalVisible} />
      <StyledButtonIcon
        ref={plusIconBox}
        icon={plusIcon}
        display
        onClick={handleFormToggle}
      />
    </>
  );
};

const mapStateToProps = state => ({
  income: state.budget.income,
  expense: state.budget.expense,
  loading: state.budget.loading,
});

const mapDispatchToProps = dispatch => ({
  parallelFetch: () => dispatch(combineFetching()),
  deleteItem: (id, type) => dispatch(deleteItemAction(id, type)),
});

BudgetView.propTypes = {
  income: PropTypes.instanceOf(Array).isRequired,
  expense: PropTypes.instanceOf(Array).isRequired,
  parallelFetch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BudgetView);
