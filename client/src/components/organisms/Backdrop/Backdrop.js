import React from 'react';
import styled from 'styled-components';

const StyledBackdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
`;

const Backdrop = () => {
  return <StyledBackdrop />;
};

export default Backdrop;
