import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  sourcemap: true,
  splitting: true,
  bundle: true,
  clean: true,
  dts: true,
  minify: false,
  treeshake: 'smallest',
  legacyOutput: false,
  format: ['esm', 'cjs'],
  metafile: false,
  platform: 'browser'
});
