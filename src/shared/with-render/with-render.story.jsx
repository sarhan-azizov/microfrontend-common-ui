import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import { withReadme } from 'storybook-readme';

import storybookStyles from '../../scss/storybook.scss';
import withRender from './with-render';
import readme from './readme.md';

const ComponentToWrap = () => <div style={{'align-self': 'center'}}>I'm WrappedComponent</div>;
const ComponentToWrapWithRender = withRender()(ComponentToWrap);

storiesOf('withRender', module)
    .addDecorator(withKnobs)
    .addDecorator(withReadme([readme]))
    .add('Playground', () => (
        <div className={storybookStyles.root}>
            <ComponentToWrapWithRender
                hidden={boolean('hidden', false)}
                rendered={boolean('rendered', true)}
            />
        </div>
    ));
