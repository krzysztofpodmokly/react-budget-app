import React, { useState } from 'react';
import styled from 'styled-components';
import arrowSvg from 'assets/svg/arrow.svg';

const StyledContainer = styled.div`
  display: inline-block;
  position: relative;
  width: 20rem;
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
  top: 55px;
  width: 100%;
  border-radius: ${({ theme }) => theme.radius};
  border: 1px solid ${({ theme }) => theme.grey};
  overflow: hidden;
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

  :not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.lightGrey2};
  }

  :hover {
    cursor: pointer;
    background: ${({ theme }) => theme.lightGrey2};
  }
`;

const Select = () => {
  const [selectedItem, setSelectedItem] = useState('Pick a type');
  const [showItems, setShowItems] = useState(false);
  const items = [{ type: 'Income', id: 1 }, { type: 'Expense', id: 2 }];

  const toggleDropdown = () => {
    setShowItems(!showItems);
  };

  const selectItem = item => {
    setSelectedItem(item.type);
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
          <StyledItem key={item.id} onClick={() => selectItem(item)}>
            {item.type}
          </StyledItem>
        ))}
      </StyledContent>
    </StyledContainer>
  );
};

export default Select;
