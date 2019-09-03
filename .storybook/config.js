import { addParameters, configure } from '@storybook/react';

import theme from './theme';
import '../src/scss/storybook.scss';

addParameters({
    options: { theme },
});

const req = require.context('../src', true, /.story.jsx$/);

function loadStories() {
    req.keys().forEach(req);
}

configure(loadStories, module);
