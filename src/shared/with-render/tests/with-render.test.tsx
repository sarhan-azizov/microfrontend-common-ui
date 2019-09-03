import React from 'react';
import { shallow } from 'enzyme';
import withRender from '../with-render';

const ComponentToWrap = () => <div>Component</div>;

describe('With Render HOC', () => {
    it('should render the wrapped component', () => {
        const ComponentToWrapWithRender = withRender()(ComponentToWrap);
        const wrapper = shallow(<ComponentToWrapWithRender />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find(ComponentToWrap)).toHaveLength(1);
    });

    it('shouldn\'t render the wrapped component', () => {
        const ComponentToWrapWithRender = withRender()(ComponentToWrap);
        const wrapper = shallow(<ComponentToWrapWithRender rendered={false} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find(ComponentToWrap)).toHaveLength(0);
    });

    it('shouldn\'t showing the wrapped component', () => {
        const ComponentToWrapWithRender = withRender()(ComponentToWrap);
        const wrapper = shallow(<ComponentToWrapWithRender hidden />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find(ComponentToWrap)).toHaveLength(1);
    });
});
