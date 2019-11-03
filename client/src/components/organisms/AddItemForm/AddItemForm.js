import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Select from 'components/atoms/Select/Select';
import Backdrop from 'components/organisms/Backdrop/Backdrop';

const StyledWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  padding: 10rem 5rem;
  z-index: 9999;
  right: 0;
  top: 0;
  height: 100vh;
  background-color: #fff;
  border-left: 10px solid ${({ theme }) => theme.lightGrey2};
  box-shadow: 5px 0 30px rgba(0, 0, 0, 0.1);
  transform: translate(${({ isVisible }) => (isVisible ? '0' : '100vw')});
  transition: transform 0.3s ease-out;

  * {
    margin: 0.5rem 0;
  }
`;

const StyledInnerWrapper = styled.div`
  display: flex;
`;

const AddItemForm = ({ isVisible }) => {
  return (
    <>
      <StyledWrapper isVisible={isVisible}>
        <Heading>Add Item Form</Heading>
        <Input placeholder="Cash" />
        <Input type="date" />
        <Input placeholder="Item" />
        <StyledInnerWrapper>
          <Select />
          <Select />
        </StyledInnerWrapper>
        <Button>Add Item</Button>
      </StyledWrapper>
      {isVisible ? <Backdrop /> : null}
    </>
  );
};

AddItemForm.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};

export default AddItemForm;
