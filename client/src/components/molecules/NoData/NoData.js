import React from 'react';
import styled from 'styled-components';
import Header from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const StyledWrapper = styled.div`
  width: 50%;
  height: 200px;
  display: inline-block;
`;

const NoData = () => {
  return (
    <StyledWrapper>
      <div>
        <Header>No data was found</Header>
        <Paragraph>Add some items</Paragraph>
      </div>
    </StyledWrapper>
  );
};

export default NoData;
