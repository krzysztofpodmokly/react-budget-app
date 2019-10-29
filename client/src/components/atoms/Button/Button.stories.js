import React from 'react';
import { storiesOf } from '@storybook/react';
// import { withKnobs, select } from '@storybook/addon-knobs';
import Button from 'components/atoms/Button/Button';
import { theme } from 'theme/mainTheme';

storiesOf('Atoms/Button', module)
  // .addDecorator(withKnobs)
  .add('Primary', () => <Button theme={theme}>Primary</Button>)
  .add('Secondary', () => (
    <Button theme={theme} secondary>
      Secondary
    </Button>
  ));
