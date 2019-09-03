import React from 'react';
import { shallow } from 'enzyme';

import { Button, BUTTON_SIZES, BUTTON_KINDS } from '../index';

describe('Button component', () => {
    const requiredProps = {
        children: <span>content</span>,
        onClick: jest.fn()
    };

    it('should render component with default props', () => {
        const wrapper = shallow(<Button {...requiredProps} />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render component with kind prop', () => {
        const wrapper = shallow(<Button {...requiredProps} kind={BUTTON_KINDS.primary}/>);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render component with size prop', () => {
        const wrapper = shallow(<Button {...requiredProps} size={BUTTON_SIZES.medium}/>);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render component with type reset', () => {
        const wrapper = shallow(<Button {...requiredProps} type="button" />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render component with active prop', () => {
        const wrapper = shallow(<Button {...requiredProps} active/>);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render component with disabled prop', () => {
        const wrapper = shallow(<Button {...requiredProps} disabled/>);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render component with className prop', () => {
        const wrapper = shallow(<Button {...requiredProps} className="className"/>);

        expect(wrapper).toMatchSnapshot();
    });

    it('shouldn\'t render component', () => {
        const wrapper = shallow(<Button {...requiredProps} rendered={false}/>);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render hidden component', () => {
        const wrapper = shallow(<Button {...requiredProps} hidden/>);

        expect(wrapper).toMatchSnapshot();
    });
});
