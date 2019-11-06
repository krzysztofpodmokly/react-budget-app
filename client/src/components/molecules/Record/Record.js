import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { TimelineMax } from 'gsap';
import styled, { css } from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';

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
        transform: translateY(-2px);
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

const StyledButtonIcon = styled(ButtonIcon)`
  width: 3rem;
  height: 3rem;
`;

const Record = ({ deleteRecord, data, bold, hover, icon, rotate, display }) => {
  const item = useRef(null);
  const tl = useRef();

  const removeItem = () => {
    tl.current = new TimelineMax()
      .to(item.current, 0.1, { y: '2vh', opacity: 0.6 })
      .to(item.current, 0.4, { y: '-10vh', opacity: 0 });
    deleteRecord();
  };

  return (
    <StyledWrapper ref={item} hover={hover}>
      <StyledParagraph bold={bold}>{data.dueDate}</StyledParagraph>
      <StyledParagraph bold={bold}>{data.item}</StyledParagraph>
      <StyledParagraph bold={bold}>{data.category}</StyledParagraph>
      <StyledParagraph bold={bold}>{data.cash}</StyledParagraph>
      <StyledButtonIcon
        icon={icon}
        rotate={rotate}
        display={display}
        onClick={removeItem}
      />
    </StyledWrapper>
  );
};

Record.propTypes = {
  data: PropTypes.objectOf(
    PropTypes.shape({
      dueDate: PropTypes.string.isRequired,
      item: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      cash: PropTypes.number.isRequired,
    }),
  ),
  bold: PropTypes.bool,
};

export default Record;
