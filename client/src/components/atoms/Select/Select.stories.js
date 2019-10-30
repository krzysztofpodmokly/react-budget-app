import React from 'react';
import { storiesOf } from '@storybook/react';
import Select from 'components/atoms/Select/Select';
import { theme } from 'theme/mainTheme';

storiesOf('Atoms/Button', module).add('Dropdown', () => (
  <Select theme={theme} />
));
