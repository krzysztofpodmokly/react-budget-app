import styled, { css } from 'styled-components';

const Button = styled.button`
  padding: 17px 30px;
  color: ${({ theme }) => theme.primaryBrown};
  text-decoration: none;
  background-color: ${({ theme }) => theme.pastelGrey100};
  width: 22rem;
  height: 4.7rem;
  border: none;
  border-radius: ${({ theme }) => theme.radius};
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 1.6rem;
  text-transform: uppercase;
  transition: background-color 0.2s ease-out;

  :hover {
    cursor: pointer;
  }

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: ${({ theme }) => theme.lightGrey1};
      width: 10.5rem;
      height: 3rem;
      font-size: 1rem;

      :hover {
        background-color: ${({ theme }) => theme.grey};
      }
    `}
`;

export default Button;
