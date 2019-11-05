import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledRing = styled.div`
  display: inline-block;
  position: relative;
  width: 6.4rem;
  height: 6.4rem;

  ${({ small, white }) =>
    small &&
    white &&
    css`
      width: 4rem;
      height: 1rem;
      top: -10px;
    `}

  & div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 5.1rem;
    height: 5.1rem;
    margin: 6px;
    border: 6px solid blue;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${({ theme }) => theme.grey} transparent transparent
      transparent;

    ${({ small, white }) =>
      small &&
      white &&
      css`
        width: 2.1rem;
        height: 2.1rem;
        border: 3px solid #fff;
        border-color: #fff transparent transparent transparent;
      `}

    :nth-child(1) {
      animation-delay: -0.45s;
    }
    :nth-child(2) {
      animation-delay: -0.3s;
    }
    :nth-child(3) {
      animation-delay: -0.15s;
    }
  }

  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Spinner = ({ small, white }) => {
  return (
    <StyledRing className="lds-ring" small={small} white={white}>
      <div />
      <div />
      <div />
      <div />
    </StyledRing>
  );
};

Spinner.propTypes = {
  small: PropTypes.bool.isRequired,
  white: PropTypes.bool.isRequired,
};

export default Spinner;
