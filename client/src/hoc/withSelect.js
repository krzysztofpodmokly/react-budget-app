import React, { useState } from 'react';

const withSelect = WrappedComponent => {
  return props => {
    const [showItems, setShowItems] = useState(false);
    const [selectedItem, setSelectedItem] = useState('Choose');

    const toggleDropdown = () => {
      setShowItems(!showItems);
    };
    return (
      <WrappedComponent
        showItems={showItems}
        toggleDropdown={toggleDropdown}
        setShowItems={setShowItems}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
        {...props}
      />
    );
  };
};

export default withSelect;
