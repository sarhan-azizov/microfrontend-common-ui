import React from 'react';
import { node, string, bool, func, oneOf } from 'prop-types';
import classNames from 'classnames';
import { compose, values } from 'ramda';

import { withRender } from '../shared';

import styles from './styles/button.scss';
import { BUTTON_KINDS, BUTTON_SIZES, ButtonInterface } from './typing';

export const Button = (props: ButtonInterface): JSX.Element => {
    console.log('==>', props);
    const className = classNames(styles.root, props.className, {
        [styles[props.kind]]: props.kind,
        [styles[props.size]]: props.size,
        [styles.disabled]: props.disabled,
        [styles.active]: props.active
    });

    const buttonProps = {
        className,
        type: props.type,
        onClick: props.onClick,
        disabled: props.disabled,
        ref: props.innerRef
    };

    return (
        <button {...buttonProps}>
            {props.children && <span className={styles.content}>{props.children}</span>}
        </button>
    );
};

Button.propTypes = {
    children: node,
    size: oneOf(values(BUTTON_SIZES)),
    kind: oneOf(values(BUTTON_KINDS)),
    type: oneOf(["button", "submit", "reset"]),

    hidden: bool,
    disabled: bool,
    active: bool,

    className: string,

    innerRef: func,
    onClick: func.isRequired
};

Button.defaultProps = {
    children: null,
    size: BUTTON_SIZES.medium,
    kind: BUTTON_KINDS.primary,
    type: 'submit',

    hidden: false,
    disabled: false,
    active: false,

    className: undefined,

    innerRef: undefined
};

export default compose(withRender(), React.memo)(Button);
























