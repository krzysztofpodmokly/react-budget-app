import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Record from 'components/molecules/Record/Record';
import Heading from 'components/atoms/Heading/Heading';
import { fetchIncome, fetchExpense } from 'actions';

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

const StyledInnerWrapper = styled.div`
  width: 50%;

  :nth-child(1) {
    margin-right: 3rem;
  }
`;

const BudgetView = ({
  fetchIncome,
  fetchExpense,
  income,
  expense,
  loading,
}) => {
  useEffect(() => {
    const parallel = async () => {
      await Promise.all([fetchIncome(), fetchExpense()]);
      // await fetchIncome();
      // await fetchExpense();
    };

    parallel();
  }, []);

  const generateList = arr =>
    arr && arr.map(item => <Record key={item._id} data={item} />);

  return (
    <>
      <StyledTopWrapper>
        <StyledHeading>Budget Calculations</StyledHeading>
        <StyledFlexWrapper>
          <StyledBox>
            <div>Income</div>
            <div>1200 zł</div>
          </StyledBox>
          <StyledBox expense>
            <div>Expense</div>
            <div>1800 zł</div>
          </StyledBox>
        </StyledFlexWrapper>
      </StyledTopWrapper>
      <StyledFlexWrapper>
        <StyledInnerWrapper>{generateList(income)}</StyledInnerWrapper>
        <StyledInnerWrapper>{generateList(expense)}</StyledInnerWrapper>
      </StyledFlexWrapper>
    </>
  );
};

const mapStateToProps = state => ({
  income: state.budget.income,
  expense: state.budget.expense,
  loading: state.budget.loading,
});

export default connect(
  mapStateToProps,
  { fetchIncome, fetchExpense },
)(BudgetView);
