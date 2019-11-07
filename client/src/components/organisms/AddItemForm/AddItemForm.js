// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import styled from 'styled-components';
// import Button from 'components/atoms/Button/Button';
// import Input from 'components/atoms/Input/Input';
// import Heading from 'components/atoms/Heading/Heading';
// import SelectType from 'components/atoms/SelectType/SelectType';
// import SelectCategory from 'components/atoms/SelectCategory/SelectCategory';

// import { addItem as addItemAction } from 'actions';

// const StyledWrapper = styled.div`
//   position: fixed;
//   display: flex;
//   flex-direction: column;
//   padding: 10rem 5rem;
//   z-index: 9999;
//   width: 65rem;
//   right: 0;
//   top: 0;
//   height: 100vh;
//   background-color: #fff;
//   border-left: 10px solid ${({ theme }) => theme.lightGrey2};
//   box-shadow: 5px 0 30px rgba(0, 0, 0, 0.1);
//   transform: translate(${({ isVisible }) => (isVisible ? '0' : '100vw')});
//   transition: transform 0.3s ease-out;
// `;

// const AddItemForm = ({ isVisible, addItem }) => {
//   const [formValues, setFormValues] = useState({
//     dueDate: {
//       config: {
//         type: 'date',
//       },
//       value: '',
//       validation: {
//         required: false,
//       },
//       valid: false,
//       touched: false,
//       errorMessage: 'Please pick a date',
//     },
//     item: {
//       config: {
//         type: 'text',
//         placeholder: 'Item',
//       },
//       value: '',
//       validation: {
//         required: true,
//         minLength: 2,
//       },
//       valid: false,
//       touched: false,
//       errorMessage: 'What did you pay for?',
//     },
//     cash: {
//       config: {
//         type: 'number',
//         placeholder: 'Cash',
//       },
//       value: '',
//       validation: {
//         required: true,
//         minLength: 1,
//       },
//       valid: false,
//       touched: false,
//       errorMessage: 'How much did you spent on that?',
//     },
//   });

//   const [formIsValid, setFormIsValid] = useState(false);

//   const formElements = [];
//   for (const key in formValues) {
//     formElements.push({
//       id: key,
//       config: formValues[key],
//     });
//   }

//   const [selectType, setSelectType] = useState({
//     type: '',
//   });

//   const [selectCategory, setSelectCategory] = useState({
//     category: '',
//   });

//   const checkValidity = (value, rules) => {
//     let isValid = true;

//     if (!rules) {
//       return true;
//     }

//     if (rules.required) {
//       isValid = value.trim() !== '' && isValid;
//     }

//     if (rules.minLength) {
//       isValid = value.length >= rules.minLength && isValid;
//     }

//     return isValid;
//   };

//   const handleSelectTypeChange = value => setSelectType(value);

//   const handleSelectCategoryChange = value => setSelectCategory(value);

//   const handleInputChange = (e, identifier) => {
//     const updatedForm = {
//       ...formValues,
//     };

//     const updatedFormElement = { ...updatedForm[identifier] };
//     updatedFormElement.value = e.target.value;
//     updatedFormElement.valid = checkValidity(
//       updatedFormElement.value,
//       updatedFormElement.validation,
//     );
//     updatedFormElement.touched = true;
//     updatedForm[identifier] = updatedFormElement;

//     let isFormValid = true;
//     for (const key in updatedForm) {
//       isFormValid = updatedForm[key].valid && isFormValid;
//     }

//     setFormValues(updatedForm);
//     setFormIsValid(isFormValid);

//     console.log(isFormValid);
//   };

//   const handleFormSubmit = e => {
//     e.preventDefault();
//     const formData = {};
//     for (const key in formValues) {
//       formData[key] = formValues[key].value;
//     }

//     const updatedForm = {
//       ...formData,
//       type: selectType,
//       category: selectCategory,
//     };
//     addItem(updatedForm, updatedForm.type);
//   };

//   return (
//     <form onSubmit={handleFormSubmit}>
//       <StyledWrapper isVisible={isVisible}>
//         <Heading style={{ marginBottom: '3rem' }}>Add Item Form</Heading>
//         <SelectType getType={handleSelectTypeChange} />
//         {formElements.map(formElement => (
//           <Input
//             elementtype={formElement.config.config.type}
//             key={formElement.id}
//             value={formElement.config.value}
//             invalid={!formElement.config.valid}
//             shouldValidate={formElement.config.validation}
//             touched={formElement.config.touched}
//             errorMessage={formElement.config.errorMessage}
//             placeholder={formElement.config.config.placeholder}
//             changed={e => handleInputChange(e, formElement.id)}
//           />
//         ))}
//         <SelectCategory getCategory={handleSelectCategoryChange} />
//         <Button style={{ marginTop: '3rem' }} disabled={!formIsValid}>
//           Add Item
//         </Button>
//       </StyledWrapper>
//     </form>
//   );
// };

// AddItemForm.propTypes = {
//   isVisible: PropTypes.bool.isRequired,
//   addItem: PropTypes.func.isRequired,
// };

// const mapDispatchToProps = dispatch => ({
//   addItem: (formValues, type) => dispatch(addItemAction(formValues, type)),
// });

// export default connect(
//   null,
//   mapDispatchToProps,
// )(AddItemForm);
