import React from 'react';
import { shallow } from 'enzyme';

import { Button } from '../index';

describe('Button component', () => {
    it('should render component with default props', () => {
        const wrapper = shallow(<Button title="123" />);

        expect(wrapper).toMatchSnapshot();
    });
});
