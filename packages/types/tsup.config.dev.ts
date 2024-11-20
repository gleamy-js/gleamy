import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  sourcemap: true,
  splitting: true,
  bundle: true,
  clean: true,
  dts: true,
  target: 'esnext',
  minify: false,
  legacyOutput: false,
  format: ['esm', 'cjs'],
});