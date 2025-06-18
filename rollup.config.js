// rollup.config.js
// This file uses pure ES Module syntax.

import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import terser from '@rollup/plugin-terser';
import dts from 'rollup-plugin-dts';

// NEW: Imports for reading package.json in an ES Module context
import path from 'path';
import {
    fileURLToPath
} from 'url';
import fs from 'fs';

// Get the equivalent of __dirname for ES Modules
const __filename = fileURLToPath(
    import.meta.url);
const __dirname = path.dirname(__filename);

// Read package.json using fs.readFileSync, as 'require' is not available in ES Modules
const packageJson = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'package.json'), 'utf8'));

// The configuration is exported as a default ES module export
export default [
    // Main bundle for CJS and ESM (your library's code)
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
                babelHelpers: 'bundled', // Or 'runtime' if you use @babel/plugin-transform-runtime
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
        plugins: [dts()], // dts() is the correct way to access the default export from this plugin
    },
];