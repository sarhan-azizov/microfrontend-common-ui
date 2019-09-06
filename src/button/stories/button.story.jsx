import React from 'react';
import { values } from "ramda";
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { boolean, text, select, withKnobs } from '@storybook/addon-knobs/react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import * as codeStyles from 'react-syntax-highlighter/dist/esm/styles/prism';

import { DEFAULT_PROP, JSXToString} from '../../../.storybook/helpers';
import { BUTTON_SIZES, BUTTON_KINDS } from "../typing";
import readme from '../readme.md';

import Button from '../button';
import styles from './button.scss';
import storybookStyles from '../../scss/storybook.scss';

storiesOf('Button', module)
    .addParameters({ jest: ['button'] })
    .addDecorator(withKnobs)
    .addDecorator(withReadme([readme]))
    .add('Primary', () => {
        const props = {
            kind: BUTTON_KINDS.primary,
            className: styles.button,
            onClick: () => {},
        };

        return (
            <div className={storybookStyles.root}>
                <h3>Primary Button</h3>
                <div>
                    <h4>Size</h4>
                    <Button {...props} size={BUTTON_SIZES.small}>Small</Button>
                    <Button {...props} size={BUTTON_SIZES.medium}>Medium</Button>
                    <Button {...props} size={BUTTON_SIZES.large}>Large</Button>
                </div>

                <div>
                    <h4>Disabled</h4>
                    <Button {...props} disabled size={BUTTON_SIZES.small}>Small</Button>
                    <Button {...props} disabled size={BUTTON_SIZES.medium}>Medium</Button>
                    <Button {...props} disabled size={BUTTON_SIZES.large}>Large</Button>
                </div>

                <div>
                    <h4>Active</h4>
                    <Button {...props} active size={BUTTON_SIZES.small}>Small</Button>
                    <Button {...props} active size={BUTTON_SIZES.medium}>Medium</Button>
                    <Button {...props} active size={BUTTON_SIZES.large}>Large</Button>
                </div>
            </div>
        );
    })
    .add('Secondary', () => {
        const props = {
            kind: BUTTON_KINDS.secondary,
            className: styles.button,
            onClick: () => {},
        };

        return (
            <div className={storybookStyles.root}>
                <h3>Secondary Button</h3>
                <div>
                    <h4>Size</h4>
                    <Button {...props} size={BUTTON_SIZES.small}>Small</Button>
                    <Button {...props} size={BUTTON_SIZES.medium}>Medium</Button>
                    <Button {...props} size={BUTTON_SIZES.large}>Large</Button>
                </div>

                <div>
                    <h4>Disabled</h4>
                    <Button {...props} disabled size={BUTTON_SIZES.small}>Small</Button>
                    <Button {...props} disabled size={BUTTON_SIZES.medium}>Medium</Button>
                    <Button {...props} disabled size={BUTTON_SIZES.large}>Large</Button>
                </div>

                <div>
                    <h4>Active</h4>
                    <Button {...props} active size={BUTTON_SIZES.small}>Small</Button>
                    <Button {...props} active size={BUTTON_SIZES.medium}>Medium</Button>
                    <Button {...props} active size={BUTTON_SIZES.large}>Large</Button>
                </div>
            </div>
        );
    })
    .add('Playground', () => {
        const props = {
            children: text('Button\'s content', 'Some Content'),
            kind: select('Kind', values(BUTTON_KINDS), 'primary'),
            size: select('Size', values(BUTTON_SIZES), 'medium'),
            rendered: boolean('Rendered', true),
            hidden: boolean('Hidden', false),
            disabled: boolean('Disabled', false),
            active: boolean('Active', false),
            type: select('Types', values(['submit', 'button', 'reset']), 'submit'),
            className: text('className', styles.button)
        };

        const code = JSXToString({
            component: 'Button',
            props: {
                //Children
                children: props.children === null ? DEFAULT_PROP : props.children,

                // Variables
                size: props.size === BUTTON_SIZES.medium ? DEFAULT_PROP : `{BUTTON_SIZES.${props.size}}`,
                kind: props.kind === BUTTON_KINDS.primary ? DEFAULT_PROP : `{BUTTON_KINDS.${props.kind}}`,

                // Boolean
                rendered: props.rendered === true ? DEFAULT_PROP : `{${props.rendered}}`,
                hidden: props.hidden === false ? DEFAULT_PROP : props.hidden,
                disabled: props.disabled === false ? DEFAULT_PROP : props.disabled,
                active: props.active === false ? DEFAULT_PROP : props.active,

                // String
                type: props.type === 'submit' ? DEFAULT_PROP : `\"${props.type}\"`,
                className: props.className === styles.button ? DEFAULT_PROP : `{\"${props.className}\"}`,

                // Required
                onClick: `""`
            }
        });

        return (
            <div className={storybookStyles.root}>
                <h3>Playground Button</h3>
                <Button {...props} onClick={() => console.info('CLICK!')} />

                <h4>Generated Code</h4>
                <div className={storybookStyles.code}>
                    <SyntaxHighlighter language="jsx" style={codeStyles.tomorrow}>
                        {code}
                    </SyntaxHighlighter>
                </div>
            </div>
        );
    });
