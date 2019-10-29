import React from 'react';
import { storiesOf } from '@storybook/react';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import { theme } from 'theme/mainTheme';

storiesOf('Atoms/Paragraph', module).add('Paragraph', () => (
  <Paragraph theme={theme}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi enim
    reprehenderit voluptate provident aliquam harum sequi, error voluptatum
    perferendis autem iusto quidem at illo quo ut, quibusdam saepe optio
    numquam!
  </Paragraph>
));
