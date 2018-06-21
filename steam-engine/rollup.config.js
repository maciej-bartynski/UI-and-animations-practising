import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify';
import sassImporter from 'node-sass-package-importer';
import scss from 'rollup-plugin-scss';
import multiEntry from "rollup-plugin-multi-entry";

export default {
    input: ['webSource/main.js'],
    output: {name: 'productionSource', file: './productionSource/main.js'},
    format: 'iife',
    sourceMap: 'inline',
    plugins: [
        multiEntry(),
        scss({
            failOnError: false,
            importer: sassImporter(),
            insert: false,
            outputStyle: 'expanded',
            output: './productionSource/styles.css'
        }),
        resolve({
            jsnext: true,
            main: true,
            browser: true,
        }),
        commonjs(),
        eslint({
            exclude: [
                'devSource/devStyles/**',
            ]
        }),
        babel({
            exclude: 'node_modules/**',
        }),
        replace({
            exclude: 'node_modules/**',
            ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
        }),
        uglify(),

    ],
};