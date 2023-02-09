/* eslint-disable @typescript-eslint/no-unsafe-call */
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import packageJson from './package.json';
import { uglify } from 'rollup-plugin-uglify';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import cleaner from 'rollup-plugin-cleaner';

const externals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  'react-scripts': 'ReactScripts',
};

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: false,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: false,
      },
    ],
    plugins: [
      cleaner({ targets: ['./dist'] }),
      resolve(),
      peerDepsExternal(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        sourceMap: false,
      }),
      uglify(),
    ],
    external: Object.keys(externals),
  },
  {
    input: 'dist/esm/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm', sourcemap: true }],
    plugins:  [peerDepsExternal(), typescript({ filterRoot: "dist/", allowUnreachableCode: false, compilerOptions: { typeRoots: ['/dist']} }), dts.default(), resolve()],
  },
];
