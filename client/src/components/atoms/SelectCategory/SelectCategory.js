import React, { useState } from 'react';
import styled from 'styled-components';
import arrowSvg from 'assets/svg/arrow.svg';
import withSelect from 'hoc/withSelect';

const StyledContainer = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
  text-transform: uppercase;
`;

const StyledSVG = styled.div`
  width: 2rem;
  height: 2rem;
  background-image: url(${arrowSvg});
  background-repeat: no-repeat;
  background-position: center;
  transition: all 0.3s ease-out;
`;

const StyledInnerContainer = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 1.5rem 2rem;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.light};
  background-color: ${({ theme }) => theme.lightGrey1};
  border: 1px solid ${({ theme }) => theme.grey};
  border-radius: ${({ theme }) => theme.radius};
  outline: none;
  color: ${({ theme }) => theme.grey};
  font-family: inherit;

  :hover ${StyledSVG} {
    transform: translateX(5px);
  }

  :hover {
    cursor: pointer;
  }
`;

const StyledSelectedItem = styled.div``;

const StyledContent = styled.div`
  display: ${({ showItems }) => (showItems ? 'block' : 'none')};
  position: absolute;
  top: 65px;
  width: 100%;
  border-radius: ${({ theme }) => theme.radius};
  border: 1px solid ${({ theme }) => theme.grey};
  overflow: hidden;
  background-color: #fff;
`;

const StyledItem = styled.div`
  padding: 1.5rem 2rem;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.light};
  background-color: ${({ theme }) => theme.lightGrey1};
  outline: none;
  color: ${({ theme }) => theme.grey};
  font-family: inherit;
  transition: background 0.2s ease-out;
  display: block;
  position: relative;
  z-index: 1;

  :not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.lightGrey2};
  }

  :hover {
    cursor: pointer;
    background: ${({ theme }) => theme.lightGrey2};
  }
`;

const SelectCategory = ({
  showItems,
  toggleDropdown,
  setShowItems,
  selectedItem,
  setSelectedItem,
  getCategory,
}) => {
  const items = ['food', 'cosmetics', 'car', 'fees', 'clothes'];

  const selectItem = item => {
    setSelectedItem(item);
    getCategory(item);
    setShowItems(false); // hide after you pick a type
  };

  return (
    <StyledContainer>
      <StyledInnerContainer onClick={toggleDropdown}>
        <StyledSelectedItem>{selectedItem}</StyledSelectedItem>
        <StyledSVG />
      </StyledInnerContainer>
      <StyledContent showItems={showItems}>
        {items.map(item => (
          <StyledItem key={item} onClick={() => selectItem(item)}>
            {item}
          </StyledItem>
        ))}
      </StyledContent>
    </StyledContainer>
  );
};

export default withSelect(SelectCategory);
