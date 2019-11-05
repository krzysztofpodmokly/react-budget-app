import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
// import moment from 'moment';

const StyledWrapper = styled.div`
  padding: 0px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.lightGrey1};
  border-bottom: 1px solid ${({ theme }) => theme.lightGrey2};
  border-left: 1px solid transparent;
  border-top: 1px solid transparent;
  border-right: 1px solid transparent;
  transition: transform 0.2s ease;

  ${({ hover }) =>
    hover &&
    css`
      :hover {
        transform: translateY(-5px);
        border: 1px solid ${({ theme }) => theme.grey};
      }
    `}
`;

const StyledParagraph = styled(Paragraph)`
  width: 14rem;
  text-align: center;
  font-weight: ${({ theme, bold }) => bold && theme.bold};

  :first-child {
    text-align: left;
  }

  :last-child,
  :nth-child(3) {
    text-align: right;
  }
`;

const Record = ({ data, bold, hover }) => (
  <StyledWrapper hover={hover}>
    <StyledParagraph bold={bold}>{data.dueDate}</StyledParagraph>
    <StyledParagraph bold={bold}>{data.item}</StyledParagraph>
    <StyledParagraph bold={bold}>{data.category}</StyledParagraph>
    <StyledParagraph bold={bold}>{data.cash}</StyledParagraph>
  </StyledWrapper>
);

Record.propTypes = {
  data: PropTypes.objectOf(
    PropTypes.shape({
      dueDate: PropTypes.string.isRequired,
      item: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      cash: PropTypes.number.isRequired,
    }),
  ),
  bold: PropTypes.bool.isRequired,
};

Record.defaultProps = {
  bold: false,
};

export default Record;
