import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  splitting: true,
  treeshake: 'smallest',
  sourcemap: true,
  bundle: true,
  clean: true,
  dts: true,
  minify: false,
  legacyOutput: false,
  format: ['esm', 'cjs'],
  platform: 'browser',
});
