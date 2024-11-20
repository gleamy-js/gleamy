import { defineConfig } from 'tsup';
import { generateBanner } from './scripts/generateBanner.cjs';

const licenseContent = generateBanner();
console.info(licenseContent);

export default defineConfig({
  entry: ['src/index.ts'],
  sourcemap: true,
  splitting: true,
  bundle: true,
  clean: true,
  dts: true,
  minify: true,
  treeshake: 'smallest',
  legacyOutput: false,
  format: ['esm', 'cjs'],
  banner: {
    js: licenseContent,
  },
  metafile: false,
  platform: 'browser'
});
