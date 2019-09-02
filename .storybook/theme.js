import { create } from '@storybook/theming';

export default create({
    base: 'dark',

    colorPrimary: 'white',
    colorSecondary: '#0099a7',

    // UI
    appBg: '#282b33',
    appContentBg: '#f8f8f8',
    appBorderColor: '#f5f5f6',
    appBorderRadius: 5,

    // Typography
    fontBase: 'arial',
    fontCode: 'monospace',

    // Text colors
    textColor: '#afb2b9',
    textInverseColor: 'rgba(255,255,255,0.9)',

    // Toolbar default and active colors
    barTextColor: 'white',
    barSelectedColor: 'red',
    barBg: '#5f6574',

    // Form colors
    inputBg: 'white',
    inputBorder: '#f5f5f6',
    inputTextColor: '$212529',
    inputBorderRadius: 5,

    brandTitle: 'KW',
    brandUrl: 'https://agent.kw.com',
    brandImage: 'https://via.placeholder.com/132x65/ce011f/FFFFFF?text=kw',
});
