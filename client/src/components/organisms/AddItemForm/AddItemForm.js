import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Linear, TimelineMax, TweenMax } from 'gsap';
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

  /* * {
    margin: 0.5rem 0;
  } */
`;

// Wrapper needed to be able to use staggerFrom method on input element
// Without it GSAP methods don't work
const StyledInnerWrapper = styled.div`
  display: block;
`;

const AddItemForm = ({ isVisible, addItem }) => {
  const header = useRef(null);
  const inputs = useRef([]);
  const buttonAddItem = useRef(null);
  const backdropLayer = useRef([]);

  const tl = useRef();

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

  isVisible &&
    (() => {
      tl.current = new TimelineMax()
        .from(header.current, 0.5, {
          opacity: 0,
          y: '-20%',
          delay: '0.3',
        })
        .staggerFrom(
          inputs.current,
          0.2,
          {
            opacity: 0,
          },
          0.1,
        )
        .from(
          buttonAddItem.current,
          0.7,
          {
            opacity: 0,
            y: '20%',
          },
          '+=0.5',
        );
    })();

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
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <StyledWrapper isVisible={isVisible}>
        <Heading ref={header} style={{ marginBottom: '3rem' }}>
          Add Item Form
        </Heading>
        <StyledInnerWrapper
          ref={el => {
            inputs.current[0] = el;
          }}
        >
          <SelectType getType={handleSelectTypeChange} />
        </StyledInnerWrapper>
        <Input
          ref={el => {
            inputs.current[1] = el;
          }}
          placeholder="Item"
          name="item"
          value={formValues.item || ''}
          onChange={handleInputChange}
          autoComplete="off"
        />
        <Input
          ref={el => {
            inputs.current[2] = el;
          }}
          placeholder="Cash"
          name="cash"
          value={formValues.cash || ''}
          onChange={handleInputChange}
          autoComplete="off"
        />
        <Input
          ref={el => {
            inputs.current[3] = el;
          }}
          type="date"
          name="dueDate"
          value={formValues.dueDate || ''}
          onChange={handleInputChange}
          autoComplete="off"
        />
        <StyledInnerWrapper
          ref={el => {
            inputs.current[4] = el;
          }}
        >
          <SelectCategory getCategory={handleSelectCategoryChange} />
        </StyledInnerWrapper>
        <Button ref={buttonAddItem} style={{ marginTop: '3rem' }}>
          Add Item
        </Button>
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
