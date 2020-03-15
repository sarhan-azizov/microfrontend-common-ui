import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

import pkg from './package.json'

export default {
    input: 'src/index.js',
    output: [
        {
            file: pkg.main,
            format: 'cjs',
        },
        {
            file: pkg.module,
            format: 'es',
        },
    ],
    plugins: [
        peerDepsExternal(),
        postcss({
            extract: false,
            modules: true,
            use: ['sass'],
        }),
        babel({
            presets: [
                'react-app',
            ],
            plugins: [
                '@babel/plugin-proposal-object-rest-spread',
                '@babel/plugin-proposal-optional-chaining',
                '@babel/plugin-syntax-dynamic-import',
                '@babel/plugin-proposal-class-properties',
                'transform-react-remove-prop-types',
            ],
            exclude: 'node_modules/**',
            runtimeHelpers: true,
        }),
        resolve(),
        commonjs(),
        terser(),
    ],
}