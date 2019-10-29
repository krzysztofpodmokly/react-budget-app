import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.pastelGrey100};
  width: 22rem;
  height: 4.7rem;
  border: none;
  border-radius: ${({ theme }) => theme.radius};
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 1.6rem;
  text-transform: uppercase;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: ${({ theme }) => theme.lightGrey};
      width: 10.5rem;
      height: 3rem;
      font-size: 1rem;
    `}

  :hover {
    cursor: pointer;
  }
`;

export default Button;
