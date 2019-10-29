import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from 'components/atoms/Heading/Heading';
import { theme } from 'theme/mainTheme';

storiesOf('Atoms/Heading', module).add('Main', () => (
  <Heading theme={theme}>Hello World!</Heading>
));
