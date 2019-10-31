import React from 'react';
import styled from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import moment from 'moment';

const StyledWrapper = styled.div`
  padding: 0px 30px;
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => theme.lightGrey1};
  border-bottom: 3px solid ${({ theme }) => theme.lightGrey2};
`;

const Record = ({ data: { category, dueDate, item, cash } }) => (
  <StyledWrapper>
    <Paragraph>{moment(dueDate).format('L')}</Paragraph>
    <Paragraph>{item}</Paragraph>
    <Paragraph>{category}</Paragraph>
    <Paragraph>{cash}</Paragraph>
  </StyledWrapper>
);

export default Record;
