import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../component.tsx';

storiesOf('Button', module)
    .add('with text', () => (
        <Button title="Hello Button">1231112</Button>
))
.add('with emoji', () => (
    <Button title="Hello Button">😀 😎 👍 💯</Button>
));
