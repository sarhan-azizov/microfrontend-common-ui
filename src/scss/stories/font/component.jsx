import React from 'react';

import styles from './component.scss';

export default () => (
    <div>
        <h4 className="story-title">Font sizes</h4>
        <table className={styles.table}>
            <tbody>
                <tr>
                    <th>Example</th>
                    <th>Variable</th>
                </tr>
                <tr>
                    <td className={styles.cell}>
                        <span className={styles.mini}>
                            11px
                        </span>
                    </td>
                    <td className={styles.cell}>$fs-mini</td>
                </tr>
                <tr>
                    <td className={styles.cell}>
                        <span className={styles.tiny}>
                            12px
                        </span>
                    </td>
                    <td className={styles.cell}>$fs-tiny</td>
                </tr>
                <tr>
                    <td className={styles.cell}>
                        <span className={styles.small}>
                            13px
                        </span>
                    </td>
                    <td className={styles.cell}>$fs-small</td>
                </tr>
                <tr>
                    <td className={styles.cell}>
                        <span className={styles.medium}>
                            14px
                        </span>
                    </td>
                    <td className={styles.cell}>$fs-medium</td>
                </tr>
                <tr>
                    <td className={styles.cell}>
                        <span className={styles.large}>
                            15px
                        </span>
                    </td>
                    <td className={styles.cell}>$fs-large</td>
                </tr>
                <tr>
                    <td className={styles.cell}>
                        <span className={styles.big}>
                            16px
                        </span>
                    </td>
                    <td className={styles.cell}>$fs-big</td>
                </tr>
                <tr>
                    <td className={styles.cell}>
                        <span className={styles.huge}>
                            17px
                        </span>
                    </td>
                    <td className={styles.cell}>$fs-huge</td>
                </tr>
                <tr>
                    <td className={styles.cell}>
                        <span className={styles.massive}>
                            18px
                        </span>
                    </td>
                    <td className={styles.cell}>$fs-massive</td>
                </tr>
                <tr>
                    <td className={styles.cell}>
                        <span className={styles.banner}>
                            21px
                        </span>
                    </td>
                    <td className={styles.cell}>$fs-banner</td>
                </tr>
            </tbody>
        </table>

        <h4 className="story-title">Font families</h4>
        <table className={styles.table}>
            <tbody>
                <tr>
                    <th>Example</th>
                    <th>Variable</th>
                </tr>
                <tr>
                    <td className={styles.cell}><span className={styles.openSans}>&#34;Open Sans&#34;, sans-serif</span></td>
                    <td className={styles.cell}>$ff-base</td>
                </tr>
            </tbody>
        </table>
    </div>
);
