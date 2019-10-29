import styled from 'styled-components';

const Input = styled.input`
  padding: 1.5rem 2rem;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.light};
  background-color: ${({ theme }) => theme.lightGrey};
  border: 1px solid ${({ theme }) => theme.grey};
  border-radius: ${({ theme }) => theme.radius};
  outline: none;
  color: ${({ theme }) => theme.grey};
  font-family: inherit;
  transition: all 0.3s ease-out;

  ::placeholder {
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.grey};
  }

  :hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 20px -15px rgba(0, 0, 0, 0.2);
  }

  :focus,
  :active {
    transform: translateY(0px);
    box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.3);
  }
`;

export default Input;
