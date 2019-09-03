import React from "react";
import {storiesOf} from '@storybook/react';
import {withReadme} from 'storybook-readme';
import classNames from "classnames";

import storybookStyles from "../../storybook.scss";
import styles from "./font.scss";
import readme from './readme.md';

storiesOf('Theme / Font', module)
    .addDecorator(withReadme([readme]))
    .add('Font Sizes', () => (
        <div className={storybookStyles.root}>
            <h3>Font Sizes</h3>
            <table className={classNames(storybookStyles.table, styles.table)}>
                <thead>
                <tr>
                    <th>Font Size</th>
                    <th>Variables</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        <span className={styles.mini}>
                            11px
                        </span>
                    </td>
                    <td>$fs-mini</td>
                </tr>
                <tr>
                    <td>
                        <span className={styles.tiny}>
                            12px
                        </span>
                    </td>
                    <td>$fs-tiny</td>
                </tr>
                <tr>
                    <td>
                        <span className={styles.small}>
                            13px
                        </span>
                    </td>
                    <td>$fs-small</td>
                </tr>
                <tr>
                    <td>
                        <span className={styles.medium}>
                            14px
                        </span>
                    </td>
                    <td>$fs-medium</td>
                </tr>
                <tr>
                    <td>
                        <span className={styles.large}>
                            15px
                        </span>
                    </td>
                    <td>$fs-large</td>
                </tr>
                <tr>
                    <td>
                        <span className={styles.big}>
                            16px
                        </span>
                    </td>
                    <td>$fs-big</td>
                </tr>
                <tr>
                    <td>
                        <span className={styles.huge}>
                            17px
                        </span>
                    </td>
                    <td>$fs-huge</td>
                </tr>
                <tr>
                    <td>
                        <span className={styles.massive}>
                            18px
                        </span>
                    </td>
                    <td>$fs-massive</td>
                </tr>
                <tr>
                    <td>
                        <span className={styles.banner}>
                            21px
                        </span>
                    </td>
                    <td>$fs-banner</td>
                </tr>
                </tbody>
            </table>
        </div>
    ))
    .add('Font Family', () => (
        <div className={storybookStyles.root}>
            <h3>Font Family</h3>
            <table className={classNames(storybookStyles.table, styles.table)}>
                <thead>
                <tr>
                    <th>Font Size</th>
                    <th>Variables</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        <span className={{'font-family': 'arial'}}>
                            Arial
                        </span>
                    </td>
                    <td>$ff-base</td>
                </tr>
                </tbody>
            </table>
        </div>
    ));



