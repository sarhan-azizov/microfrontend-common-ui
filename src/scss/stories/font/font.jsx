import React from 'react';
import classNames from 'classnames';

import styles from './font.scss';
import storybookStyles from "../../storybook.scss";

export default () => (
    <div className={storybookStyles.root}>
        <h3>Color Palette</h3>
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
);
