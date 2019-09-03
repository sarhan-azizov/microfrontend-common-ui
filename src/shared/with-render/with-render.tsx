import React from 'react';
import { bool, oneOfType, node, func } from 'prop-types';
import { omit } from 'ramda';

import { WithRenderInterface } from './typing';

export default () => (WrappedComponent: React.ComponentType<any>): React.ComponentType<any> => {
    // eslint-disable-next-line
    const WithRender = (props: WithRenderInterface): JSX.Element | null => (!props.rendered ? null : !props.hidden
            ? <WrappedComponent {...omit(['rendered'], props)}>{props.children}</WrappedComponent>
            : <div hidden={props.hidden}>
                <WrappedComponent {...omit(['rendered'], props)}>{props.children}</WrappedComponent>
            </div>
    );

    WithRender.propTypes = {
        hidden: bool,
        rendered: bool,
        children: oneOfType([node, func])
    };

    WithRender.defaultProps = {
        hidden: false,
        rendered: true,
        children: null
    };

    return WithRender;
};
