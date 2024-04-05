/* eslint-disable @typescript-eslint/no-unsafe-call */
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import dts from 'rollup-plugin-dts';
import packageJson from './package.json' assert { type: 'json' };
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import cleaner from 'rollup-plugin-cleaner';
import { visualizer } from 'rollup-plugin-visualizer';
import { readFileSync } from 'fs';

let licenseContent;
try {
  licenseContent = readFileSync('../../LICENSE.md', {
    encoding: 'utf8',
    flag: 'r',
  });
} catch (error) {
  console.error('Error reading license file', error);
}

// Terser plugin strips comments. This will be preserved.
const license = `
/*! *****************************************************************************
${licenseContent}
***************************************************************************** */
`;

const footer = '/*! *** check out www.gleamy.dev ***/';

const visualizerOptions = {
  sourcemap: false,
  gzipSize: true,
  brotliSize: true,
};

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: false,
        banner: license,
        footer,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: false,
        preserveModules: false,
        banner: license,
        footer,
      },
    ],
    plugins: [
      cleaner({ targets: ['./dist'] }),
      peerDepsExternal(),
      typescript({
        tsconfig: './tsconfig.json',
        skipLibCheck: true,
        sourceMap: false,
        exclude: ['**/__tests__', '**/*.test.ts'],
      }),
      commonjs(),
      terser(),
      visualizer({
        ...visualizerOptions,
        filename: '../../reports/bundles/stats.cjs.html',
        title: `Gleamy CommonJS bundle stats`,
      }),
    ],
  },
  {
    input: 'dist/esm/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm', sourcemap: true }],
    plugins: [
      peerDepsExternal(),
      typescript({
        tsconfig: './tsconfig.json',
        filterRoot: 'dist/',
        allowUnreachableCode: false,
        compilerOptions: { typeRoots: ['/dist'] },
        exclude: ['**/__tests__', '**/*.test.ts'],
      }),
      dts.default(),
      resolve(),
      visualizer({
        ...visualizerOptions,
        filename: '../../reports/bundles/stats.esm.html',
        title: `Gleamy ECMAScript modules bundle stats`,
      }),
    ],
  },
];
