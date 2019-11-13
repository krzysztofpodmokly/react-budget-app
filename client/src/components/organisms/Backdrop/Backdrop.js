import React, { forwardRef } from 'react';
import styled from 'styled-components';

const StyledBackdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0;
`;

const Backdrop = forwardRef(({ className }, ref) => (
  <StyledBackdrop className={className} ref={ref} />
));

export default Backdrop;
