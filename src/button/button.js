import React from 'react';
import { node } from 'prop-types';
import cx from 'classnames';

import styles from './button.scss';

const Button = props => {
    return (
        <button className={cx(props.className, styles.root)}  onClick={props.onClick}>
            {props.children}
        </button>
    );
};

Button.propTypes = {
    children: node
};

Button.defaultProps = {
    children: null,
    id: 'SarhanButton'
};

export default Button;