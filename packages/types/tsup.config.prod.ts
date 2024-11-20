import { defineConfig } from 'tsup';
import { generateBanner } from './scripts/generateBanner.cjs';

const licenseContent = generateBanner();
console.info(licenseContent);

export default defineConfig({
  entry: ['src/index.ts'],
  sourcemap: false,
  splitting: true,
  bundle: true,
  clean: true,
  dts: true,
  target: 'esnext',
  minify: true,
  legacyOutput: false,
  format: ['esm', 'cjs'],
  banner: {
    js: licenseContent,
  },
});