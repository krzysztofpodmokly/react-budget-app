import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import SelectType from 'components/atoms/SelectType/SelectType';
import SelectCategory from 'components/atoms/SelectCategory/SelectCategory';
import Backdrop from 'components/organisms/Backdrop/Backdrop';

import { addItem as addItemAction } from 'actions';

const StyledWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  padding: 10rem 5rem;
  z-index: 9999;
  width: 65rem;
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

const AddItemForm = ({ isVisible, addItem }) => {
  const [formValues, setFormValues] = useState({
    dueDate: '',
    item: '',
    cash: null,
  });

  const [selectType, setSelectType] = useState({
    type: '',
  });

  const [selectCategory, setSelectCategory] = useState({
    category: '',
  });

  const handleSelectTypeChange = value => setSelectType(value);

  const handleSelectCategoryChange = value => setSelectCategory(value);

  const handleInputChange = e => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    const updatedForm = {
      ...formValues,
      type: selectType,
      category: selectCategory,
    };

    addItem(updatedForm, updatedForm.type);
    // console.log(updatedForm);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <StyledWrapper isVisible={isVisible}>
        <Heading>Add Item Form</Heading>
        <SelectType getType={handleSelectTypeChange} />
        <Input
          placeholder="Item"
          name="item"
          value={formValues.item || ''}
          onChange={handleInputChange}
        />
        <Input
          placeholder="Cash"
          name="cash"
          value={formValues.cash || ''}
          onChange={handleInputChange}
        />
        <Input
          type="date"
          name="dueDate"
          value={formValues.dueDate || ''}
          onChange={handleInputChange}
        />
        <SelectCategory getCategory={handleSelectCategoryChange} />
        <Button>Add Item</Button>
      </StyledWrapper>
      {isVisible ? <Backdrop /> : null}
    </form>
  );
};

AddItemForm.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  addItem: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  addItem: (formValues, type) => dispatch(addItemAction(formValues, type)),
});

export default connect(
  null,
  mapDispatchToProps,
)(AddItemForm);
