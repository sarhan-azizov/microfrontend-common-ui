import React from 'react'

export interface WithRenderInterface {
    children: React.ReactNode,
    hidden: boolean,
    rendered: boolean,
}
