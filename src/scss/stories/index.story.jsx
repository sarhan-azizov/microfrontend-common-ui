import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withReadme } from 'storybook-readme';

import readme from './readme.md';
import { ColorPalette } from './color-palette';
import { Font } from './font';

storiesOf('Assets', module)
    .addDecorator(withKnobs)
    .addDecorator(withReadme([readme]))
    .add('Color Palette', ColorPalette)
    .add('Font sizes', Font);

