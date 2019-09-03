import React from 'react';
import classNames from 'classnames';

import { colorsList, getPalette } from './helpers';
import storybookStyles from '../../storybook.scss';
import styles from './color-palette.scss';

export default () => (
    <div className={storybookStyles.root}>
        <h3>Color Palette</h3>
        <table className={classNames(storybookStyles.table, styles.table)}>
            <thead>
                <tr>
                    <th>Colors</th>
                    <th>HEX</th>
                    <th>Variables</th>
                </tr>
            </thead>
            <tbody>
                {getPalette(colorsList)}
            </tbody>
        </table>
    </div>
);
