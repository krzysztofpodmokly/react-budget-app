import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
// import moment from 'moment';

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

const Record = ({ data, bold }) => {
  return (
    <StyledWrapper bold={bold}>
      <StyledParagraph>{data.dueDate}</StyledParagraph>
      <StyledParagraph>{data.item}</StyledParagraph>
      <StyledParagraph>{data.category}</StyledParagraph>
      <StyledParagraph>{data.cash}</StyledParagraph>
    </StyledWrapper>
  );
};

Record.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
  bold: PropTypes.bool.isRequired,
};

export default Record;
