const convertPropertiesToString = (props, defaultProps) => Object.entries(props).filter(([prop, value]) => {
    const parsedValue = props[prop] && props[prop].replace(/\{/g, '').replace(/\}/g, '');

    return defaultProps[prop] && String(defaultProps[prop]) !== String(parsedValue) && `${prop}=${value}`;
}).map(prop => prop.join('=')).join(' ');


export const JSXToString = ({ component, props, defaultProps }) => {
    let str = `<${component} `;
    str += convertPropertiesToString(props, defaultProps);
    str += props.children ? `>${props.children}</Button>` : `/>`;

    return str;
};
