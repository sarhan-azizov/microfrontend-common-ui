import { create } from '@storybook/theming';

export default create({
    base: 'dark',

    colorPrimary: 'white',
    colorSecondary: '#0099a7',

    // UI
    appBg: '#373f51',
    appContentBg: 'white',
    appBorderColor: '#eee',
    appBorderRadius: 5,

    // Typography
    fontBase: 'arial',
    fontCode: 'monospace',

    // Text colors
    textColor: '#afb2b9',
    textInverseColor: 'rgba(255,255,255,0.9)',

    // Toolbar default and active colors
    barTextColor: 'white',
    barSelectedColor: '#0099a7',
    barBg: '#282b33',

    // Form colors
    inputBg: 'white',
    inputBorder: '#ddd',
    inputTextColor: '$212529',
    inputBorderRadius: 5,

    brandTitle: 'KW',
    brandUrl: 'https://agent.kw.com',
    brandImage: 'https://via.placeholder.com/132x65/ce011f/FFFFFF?text=kw',
});
