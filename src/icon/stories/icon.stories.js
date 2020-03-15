import React from 'react';
import { storiesOf } from '@storybook/react';

import Icon from '../icon';

storiesOf('Icon', module)
    .add('Primary', () => {
        return (
            <div>
                <h3>Primary Icon</h3>
                <div>
                    <h4>Size</h4>
                    <Icon>Icon</Icon>
                </div>
            </div>
        );
    });
