import React from 'react';
import styles from './component.scss';
import { colorsList, getPalette } from './helpers';

export default () => (
    <div>
        <h4 className="story-title">Color Palette</h4>
        <div className={styles.row}>{getPalette(colorsList)}</div>
    </div>
);
