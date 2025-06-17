import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import terser from '@rollup/plugin-terser';
import dts from 'rollup-plugin-dts';

const packageJson = require('./package.json');

export default [
    {
        input: 'src/index.ts', // Your main entry point for the library
        output: [{
                file: packageJson.main, // CommonJS output (e.g., dist/index.js)
                format: 'cjs',
                sourcemap: true,
            },
            {
                file: packageJson.module, // ES Module output (e.g., dist/index.esm.js)
                format: 'esm',
                sourcemap: true,
            },
        ],
        plugins: [
            peerDepsExternal(), // Automatically externalizes peer dependencies
            resolve(), // Resolves third-party modules in node_modules
            commonjs(), // Converts CommonJS modules to ES modules
            typescript({
                tsconfig: './tsconfig.json'
            }), // Transpiles TypeScript
            babel({
                babelHelpers: 'bundled',
                exclude: 'node_modules/**', // Don't transpile node_modules files with Babel
            }),
            postcss({
                extract: 'index.css', // Extracts all compiled CSS into dist/index.css
                modules: false, // Set to true if you're using CSS Modules, false for global styles
                use: ['sass'], // Tell postcss to use sass for .scss files
                minimize: true, // Minify the output CSS
            }),
            terser(), // Minify the output JavaScript bundle
        ],
    },
    // Bundle for generating TypeScript declaration files (.d.ts)
    {
        input: 'dist/index.d.ts', // Use the already generated .d.ts files as input
        output: [{
            file: 'dist/index.d.ts',
            format: 'esm'
        }], // Overwrite with a cleaner .d.ts bundle
        plugins: [dts.default()], // Use dts.default() due to how rollup-plugin-dts exports
    },
];