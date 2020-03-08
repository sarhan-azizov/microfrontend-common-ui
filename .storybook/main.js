const path = require('path');

module.exports = {
    stories: ['../src/**/*.stories.js'],
    addons: ['@storybook/addon-actions', '@storybook/addon-links'],
    webpackFinal: async (config, {configType}) => {
        // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
        // You can change the configuration based on that.
        // 'PRODUCTION' is used when building the static version of storybook.

        // Make whatever fine-grained changes you need
        config.module.rules.push({
            test: /\.scss$/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        importLoaders: 1
                    }
                },
                'sass-loader'
            ]
        });

        // Return the altered config
        return config;
    },
};
