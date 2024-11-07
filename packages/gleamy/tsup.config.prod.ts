import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  splitting: false,
  treeshake: 'smallest',
  sourcemap: true,
  bundle: false,
  clean: true,
  dts: true,
  minify: true,
  legacyOutput: false,
  format: ['esm' , 'cjs'],
})