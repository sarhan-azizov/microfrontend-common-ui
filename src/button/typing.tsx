import React from 'react'
import { SIZES, KINDS } from '../enum';

export enum BUTTON_SIZES {
    small = SIZES.small,
    medium = SIZES.medium,
    large = SIZES.large
}

export enum BUTTON_KINDS {
    primary = KINDS.primary,
    secondary = KINDS.secondary
}

type ButtonType = 'button' | 'submit' | 'reset';

export interface ButtonInterface {
    children: React.ReactNode,

    size: BUTTON_SIZES,
    kind: BUTTON_KINDS,
    type: ButtonType,

    hidden: boolean,
    disabled: boolean,
    active: boolean,

    className: string,

    innerRef: React.RefObject<HTMLButtonElement>,
    onClick: (e: React.MouseEvent) => void
}
