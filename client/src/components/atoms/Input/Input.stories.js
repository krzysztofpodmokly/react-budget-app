import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from 'components/atoms/Input/Input';
import { theme } from 'theme/mainTheme';

storiesOf('Atoms/Input', module)
  .add('Item', () => <Input placeholder="Item" theme={theme} />)
  .add('Cash', () => <Input placeholder="Price" theme={theme} />)
  .add('Category', () => <Input placeholder="Category" theme={theme} />)
  .add('Date', () => <Input placeholder="Date" theme={theme} />)
  .add('Type', () => <Input placeholder="Type" theme={theme} />);
