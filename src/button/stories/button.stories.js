import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../button';

storiesOf('Button', module)
    .add('Primary', () => {
        return (
            <div>
                <h3>Primary Button</h3>
                <div>
                    <h4>Size</h4>
                    <Button>Small</Button>
                </div>
            </div>
        );
    });
