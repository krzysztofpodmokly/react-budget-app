import React, { useState, useEffect, useRef } from 'react';
import { TimelineMax, Back } from 'gsap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Record from 'components/molecules/Record/Record';
import Heading from 'components/atoms/Heading/Heading';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import plusIcon from 'assets/svg/plus.svg';
import AddItemForm from 'components/organisms/AddItemForm/AddItemForm';
import Spinner from 'components/atoms/Spinner/Spinner';
import NoData from 'components/molecules/NoData/NoData';
import Backdrop from 'components/organisms/Backdrop/Backdrop';
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
  loadingInc,
  loadingExp,
  parallelFetch,
  deleteItem,
}) => {
  const header = useRef(null);
  const incomeBox = useRef(null);
  const expenseBox = useRef(null);
  const plusIconBox = useRef(null);
  const backdrop = useRef(null);

  const tl = useRef();
  const tl2 = useRef();

  useEffect(() => {
    parallelFetch();

    tl.current = new TimelineMax()
      .from(header.current, 0.5, {
        opacity: 0,
        y: '-2vw',
      })
      .from(incomeBox.current, 0.5, { opacity: 0, x: '-2vw' })
      .from(expenseBox.current, 0.5, { opacity: 0, x: '2vw' }, '-=0.5')
      .from(plusIconBox.current, 0.5, {
        opacity: 0,
        x: '5vw',
        rotation: 180,
      });
  }, [parallelFetch]);

  const [isModalVisible, setModalVisibility] = useState(false);

  const handleFormToggle = () => {
    setModalVisibility(!isModalVisible);

    !isModalVisible
      ? (tl2.current = new TimelineMax()
          .to(backdrop.current, 0.1, { x: '0vw' })
          .to(backdrop.current, 0.5, { opacity: 1 })
          .to(
            plusIconBox.current,
            1,
            {
              css: { backgroundColor: '#7F8985' },
            },
            '-=0.5',
          )
          .to(
            plusIconBox.current,
            1,
            { rotation: 135, ease: Back.easeOut },
            '-=1',
          ))
      : (tl2.current = new TimelineMax()
          .to(backdrop.current, 0.5, { opacity: 0 })
          .to(backdrop.current, 0.1, { x: '-100vw' })
          .to(
            plusIconBox.current,
            1,
            {
              css: { backgroundColor: '#F5F5F5' },
            },
            '-=0.5',
          )
          .to(
            plusIconBox.current,
            1,
            { rotation: -90, ease: Back.easeOut },
            '-=1',
          ));
  };

  const generateList = (arr, type) =>
    arr.map(item => (
      <Record
        deleteRecord={() => deleteItem(item._id, type)}
        key={item._id}
        data={item}
        hover="true"
        icon={plusIcon}
        rotate="true"
        display="true"
      />
    ));

  const calcBudget = arr =>
    arr.length ? `${arr.reduce((acc, curr) => acc + curr.cash, 0)} zł` : '-';

  const renderConditional = (loading, arr, type) => {
    if (!loading) {
      if (arr.length) {
        return generateList(arr, type);
      }
      return <NoData />;
    }
    return <Spinner />;
  };

  return (
    <>
      <StyledTopWrapper>
        <StyledHeading ref={header}>Budget Calculations</StyledHeading>
        <StyledFlexWrapper>
          <StyledBox ref={incomeBox}>
            <div>Income</div>
            <div>{calcBudget(income)}</div>
          </StyledBox>
          <StyledBox expense ref={expenseBox}>
            <div>Expense</div>
            <div>{calcBudget(expense)}</div>
          </StyledBox>
        </StyledFlexWrapper>
      </StyledTopWrapper>
      <StyledFlexWrapper>
        <StyledColumnWrapper>
          <StyledInnerWrapper>
            {renderConditional(loadingInc, income, 'income')}
          </StyledInnerWrapper>
        </StyledColumnWrapper>
        <StyledColumnWrapper>
          <StyledInnerWrapper>
            {renderConditional(loadingExp, expense, 'expense')}
          </StyledInnerWrapper>
        </StyledColumnWrapper>
      </StyledFlexWrapper>
      <AddItemForm isVisible={isModalVisible} />
      <Backdrop ref={backdrop} />
      <StyledButtonIcon
        ref={plusIconBox}
        icon={plusIcon}
        display="true"
        onClick={handleFormToggle}
      />
    </>
  );
};

const mapStateToProps = state => ({
  income: state.budget.income,
  expense: state.budget.expense,
  loadingInc: state.budget.loadingInc,
  loadingExp: state.budget.loadingExp,
});

const mapDispatchToProps = dispatch => ({
  parallelFetch: () => dispatch(combineFetching()),
  deleteItem: (id, type) => dispatch(deleteItemAction(id, type)),
});

BudgetView.propTypes = {
  income: PropTypes.instanceOf(Array).isRequired,
  expense: PropTypes.instanceOf(Array).isRequired,
  parallelFetch: PropTypes.func.isRequired,
  loadingInc: PropTypes.bool.isRequired,
  loadingExp: PropTypes.bool.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BudgetView);
