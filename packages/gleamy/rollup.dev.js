/* eslint-disable @typescript-eslint/no-unsafe-call */
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import packageJson from './package.json' assert { type: 'json' };
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: false,
        watch: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      typescript({
        tsconfig: './tsconfig.json',
        sourceMap: false,
        exclude: ['**/__tests__', '**/*.test.ts'],
      }),
      resolve(),
      commonjs(),
    ],
  },
];
