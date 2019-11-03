import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import moment from 'moment';

const StyledWrapper = styled.div`
  padding: 0px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.lightGrey1};
  border-bottom: 3px solid ${({ theme }) => theme.lightGrey2};
`;

const StyledParagraph = styled(Paragraph)`
  width: 14rem;
  text-align: center;

  :first-child {
    text-align: left;
  }

  :last-child,
  :nth-child(3) {
    text-align: right;
  }
`;

const Record = ({ data: { category, dueDate, item, cash } }) => (
  <StyledWrapper>
    <StyledParagraph>{moment(dueDate).format('L')}</StyledParagraph>
    <StyledParagraph>{item}</StyledParagraph>
    <StyledParagraph>{category}</StyledParagraph>
    <StyledParagraph>{cash}</StyledParagraph>
  </StyledWrapper>
);

Record.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
  category: PropTypes.string.isRequired,
  cash: PropTypes.number.isRequired,
  item: PropTypes.string.isRequired,
  dueDate: PropTypes.instanceOf(Date).isRequired,
};

// Record.defaultProps = {
//   category: '',
//   cash: 0,
//   item: '',
//   dueDate: new Date(),
// };

export default Record;
