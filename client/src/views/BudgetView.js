import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Record from 'components/molecules/Record/Record';
import Heading from 'components/atoms/Heading/Heading';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import plusIcon from 'assets/svg/plus.svg';
import AddItemForm from 'components/organisms/AddItemForm/AddItemForm';
import Spinner from 'components/atoms/Spinner/Spinner';
import { combineFetching } from 'actions';

const data = {
  cash: 'Amount of money',
  item: 'Item',
  category: 'Category',
  dueDate: 'Date',
};

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

  :nth-child(1) {
    margin-right: 3rem;
  }
`;

const StyledInnerWrapper = styled.div`
  width: 100%;

  /* :nth-child(1) {
    margin-right: 3rem;
  } */
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

const StyledTopRow = styled(Record)`
  background-color: ${({ theme }) => theme.grey};
`;

const BudgetView = ({ income, expense, loading, parallelFetch }) => {
  useEffect(() => {
    parallelFetch();
  }, [parallelFetch]);

  const [isModalVisible, setModalVisibility] = useState(false);

  const handleFormToggle = () => setModalVisibility(!isModalVisible);

  const generateList = arr =>
    !loading && arr && arr.map(item => <Record key={item._id} data={item} />);

  const calcBudget = arr => arr.reduce((acc, curr) => acc + curr.cash, 0);

  return (
    <>
      <StyledTopWrapper>
        <StyledHeading>Budget Calculations</StyledHeading>
        <StyledFlexWrapper>
          <StyledBox>
            <div>Income</div>
            <div>
              {income.length ? calcBudget(income) : <Spinner small white />} zł
            </div>
          </StyledBox>
          <StyledBox expense>
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
          <StyledTopRow data={data} bold />
          <StyledInnerWrapper>{generateList(income)}</StyledInnerWrapper>
        </StyledColumnWrapper>
        <StyledColumnWrapper>
          <StyledTopRow data={data} bold />
          <StyledInnerWrapper>{generateList(expense)}</StyledInnerWrapper>
        </StyledColumnWrapper>
      </StyledFlexWrapper>
      <AddItemForm isVisible={isModalVisible} />
      <StyledButtonIcon icon={plusIcon} onClick={handleFormToggle} />
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
});

BudgetView.propTypes = {
  income: PropTypes.arrayOf(PropTypes.array).isRequired,
  expense: PropTypes.arrayOf(PropTypes.array).isRequired,
  parallelFetch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BudgetView);
