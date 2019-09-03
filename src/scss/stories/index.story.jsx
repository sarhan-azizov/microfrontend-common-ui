import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';

import readme from './readme.md';
import { ColorPalette } from './color-palette';
import { Font } from './font';

storiesOf('Theme', module)
    .addDecorator(withReadme([readme]))
    .add('Color Palette', ColorPalette)
    .add('Font sizes', Font);

