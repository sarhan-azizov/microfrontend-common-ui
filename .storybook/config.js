import { addParameters, configure } from '@storybook/react';

import '../src/scss/storybook.scss';
import theme from './theme';

addParameters({
    options: { theme },
});

const req = require.context('../src', true, /.story.jsx$/);

function loadStories() {
    req.keys().forEach(req);
}

configure(loadStories, module);
