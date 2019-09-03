import { addParameters, configure, addDecorator } from '@storybook/react';
import { withTests } from '@storybook/addon-jest';

import theme from './theme';
import '../src/scss/storybook.scss';

import jestTestResults from '../reports/.jest-test-results.json';

addDecorator(
    withTests({
        results: jestTestResults,
        filesExt: '\\.test.tsx$',
    })
);

addParameters({
    options: { theme },
});

const req = require.context('../src', true, /.story.jsx$/);

function loadStories() {
    req.keys().forEach(req);
}

configure(loadStories, module);
