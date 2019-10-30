import React from 'react';
import { ThemeProvider } from 'styled-components';
import Button from 'components/atoms/Button/Button';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';
import Input from 'components/atoms/Input/Input';
import Select from 'components/atoms/Select/Select';
import Record from 'components/molecules/Record/Record';

const Root = () => {
  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <>
          <Button>Click</Button>
          <Button secondary>Remove</Button>
          <Input placeholder="Cash" />
          <Select />
          <Record />
        </>
      </ThemeProvider>
    </div>
  );
};

export default Root;
