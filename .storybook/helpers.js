import { join, map, filter, compose, toPairs } from 'ramda';

export const DEFAULT_PROP = "DEFAULT_PROP";

const convertPropertiesToString = props => compose(
    join(' '),
    map(([key, val]) => val === true ? key : `${key}=${val}`),
    filter(([key, value]) => value !== DEFAULT_PROP),
    toPairs
)(props);

export const JSXToString = ({ component, props: { children, ...props } }) => {
    let str = `<${component} `;
    str += convertPropertiesToString(props);
    str += children ? `>${children}</${component}>` : ` />`;

    return str;
};
