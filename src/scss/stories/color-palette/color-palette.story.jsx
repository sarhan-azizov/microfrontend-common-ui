import React from "react";
import classNames from "classnames";
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';

import { colorsList, getPalette } from "./helpers";
import storybookStyles from "../../storybook.scss";
import styles from "./color-palette.scss";
import readme from './readme.md';

storiesOf('Theme / Color Palette', module)
    .addDecorator(withReadme([readme]))
    .add('Color Palette', () => (
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
    ));

