import React from 'react';
import { ThemeProvider } from 'styled-components';
import Button from 'components/atoms/Button/Button';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';
import Input from 'components/atoms/Input/Input';

const Root = () => {
  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <>
          <Button>Click</Button>
          <Button secondary>Remove</Button>
          <Input placeholder="Cash" />
        </>
      </ThemeProvider>
    </div>
  );
};

export default Root;
