import { defineConfig } from 'tsup';
import { generateBanner } from './scripts/generateBanner.cjs';

const licenseContent = generateBanner();
console.info(licenseContent);

export default defineConfig({
  entry: ['src/index.ts'],
  sourcemap: true,
  bundle: false,
  clean: true,
  dts: true,
  minify: true,
  legacyOutput: false,
  format: ['esm', 'cjs'],
  banner: {
    js: licenseContent,
  },
  metafile: false,
  platform: 'browser'
});
