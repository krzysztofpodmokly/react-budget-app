import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const StyledInput = styled.input`
  padding: 1.5rem 2rem;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.light};
  background-color: ${({ theme }) => theme.lightGrey1};
  border: 1px solid ${({ theme }) => theme.grey};
  border-radius: ${({ theme }) => theme.radius};
  outline: none;
  color: ${({ theme }) => theme.grey};
  font-family: inherit;
  transition: all 0.3s ease-out;
  height: 6rem;
  margin: 0.5rem 0;

  :nth-of-type(1) {
    margin-top: 1rem;
  }

  :last-of-type {
    margin-bottom: 1rem;
  }

  ::placeholder {
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.grey};
  }

  /* :hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 20px -15px rgba(0, 0, 0, 0.2);
  }

  :focus,
  :active {
    transform: translateY(0px);
    box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.3);
  } */
`;

const Input = ({
  elementtype,
  value,
  invalid,
  shouldValidate,
  touched,
  errorMessage,
  placeholder,
  changed,
}) => {
  let errorMsg = null;
  if (invalid && shouldValidate && touched) {
    errorMsg = <Paragraph>{errorMessage}</Paragraph>;
  }

  return (
    <>
      {errorMsg}
      <StyledInput
        type={elementtype}
        onChange={changed}
        value={value}
        placeholder={placeholder}
      />
    </>
  );
};

Input.propTypes = {
  elementtype: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  invalid: PropTypes.bool.isRequired,
  touched: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
  changed: PropTypes.func.isRequired,
  shouldValidate: PropTypes.instanceOf(Object).isRequired,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  placeholder: '',
};

export default Input;
