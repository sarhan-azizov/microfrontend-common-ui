module.exports = {
    plugins: {
        'postcss-import': {},
        'postcss-nested': {},
        'postcss-simple-vars' : {},
        'postcss-cssnext': {
            browsers: ['last 2 versions', '> 5%'],
        }
    }
};
