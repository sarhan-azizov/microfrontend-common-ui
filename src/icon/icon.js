import React from 'react';
import { node } from 'prop-types';
import cx from 'classnames';

import styles from './icon.scss';

const Icon = props => {
    return (
        <span className={cx(props.className, styles.root)}  onClick={props.onClick}>
            {props.children}
        </span>
    );
};

Icon.propTypes = {
    children: node,
};

Icon.defaultProps = {
    children: null,
};

export default Icon;