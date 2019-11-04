import React from 'react';
import styled, { css } from 'styled-components';

const StyledRing = styled.div`
  display: inline-block;
  position: relative;
  width: 6.4rem;
  height: 6.4rem;

  & div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 5.1rem;
    height: 5.1rem;
    margin: 6px;
    border: 6px solid #fff;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${({ theme }) => theme.grey} transparent transparent
      transparent;

    :nth-child(1) {
      animation-delay: -0.45s;
    }
    :nth-child(2) {
      animation-delay: -0.3s;
    }
    :nth-child(3) {
      animation-delay: -0.15s;
    }

    /* ${({ small }) =>
      small &&
      css`
        width: 1rem;
        height: 1rem;
      `} */
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

const Spinner = () => {
  return (
    <StyledRing className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </StyledRing>
  );
};

export default Spinner;
