import React from 'react';
import styles from './component.scss';

interface ButtonProps {
    title?: string
    children?: React.ReactNode,
    type?: "button"
}

export const Button = (props: ButtonProps) => (<button type="button" className={styles.button}>{props.title}<span>{props.children}</span></button>);

Button.propTypes = {

};

Button.defaultProps = {

};

export default Button;


