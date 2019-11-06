import styled, { css } from 'styled-components';

const ButtonIcon = styled.button`
  opacity: ${({ display }) => (display ? '1' : '0')};
  width: 6.7rem;
  height: 6.7rem;
  border-radius: 2rem;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 40%;
  border: none;
  outline: none;

  .active {
    background-color: white;
  }

  :hover {
    cursor: pointer;
  }

  ${({ rotate }) =>
    rotate &&
    css`
      transform: rotate(45deg);
    `}
`;

export default ButtonIcon;
