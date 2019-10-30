import React from 'react';
import styled from 'styled-components';
import Record from 'components/molecules/Record/Record';
import Heading from 'components/atoms/Heading/Heading';

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
  padding: 17px 30px;
  background: ${({ theme, expense }) =>
    expense ? theme.expense : theme.income};
  color: #fff;
  border-radius: ${({ theme }) => theme.radius};

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

const BudgetView = () => {
  return (
    <>
      <StyledTopWrapper>
        <StyledHeading>Budget Calculations</StyledHeading>
        <StyledFlexWrapper>
          <StyledBox>Income</StyledBox>
          <StyledBox expense>Expense</StyledBox>
        </StyledFlexWrapper>
      </StyledTopWrapper>
      <StyledFlexWrapper>
        <StyledInnerWrapper>
          <Record />
          <Record />
          <Record />
          <Record />
        </StyledInnerWrapper>
        <StyledInnerWrapper>
          <Record />
          <Record />
          <Record />
          <Record />
          <Record />
          <Record />
        </StyledInnerWrapper>
      </StyledFlexWrapper>
    </>
  );
};

export default BudgetView;
