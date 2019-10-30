import React from 'react';
import styled from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const StyledWrapper = styled.div`
  padding: 0px 30px;
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => theme.lightGrey1};
  border-bottom: 3px solid ${({ theme }) => theme.lightGrey2};
`;

const Record = () => (
  <StyledWrapper>
    <Paragraph>2019-06-23</Paragraph>
    <Paragraph>Apples</Paragraph>
    <Paragraph>Food</Paragraph>
    <Paragraph>3 zł</Paragraph>
  </StyledWrapper>
);

export default Record;
