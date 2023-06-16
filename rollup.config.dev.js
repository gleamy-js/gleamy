import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import replace from '@rollup/plugin-replace';

const devDirectory = '.dev';
process.env.NODE_ENV = 'development';

export default {
  input: 'src/Preview.tsx',
  output: {
    file: `${devDirectory}/bundle.js`,
    format: 'iife',
    sourcemap: true,
  },
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.dev.json',
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      preventAssignment: true,
    }),
    serve({
      open: true,
      contentBase: [devDirectory, 'public'],
      historyApiFallback: true,
      host: 'localhost',
      port: 3000,
      onListening: function (server) {
        const address = server.address()
        const host = address.address === '::' ? 'localhost' : address.address
        const protocol = this.https ? 'https' : 'http'
        console.log(`Server listening at ${protocol}://${host}:${address.port}/`)
      }
    }),
    livereload(devDirectory),
  ],
};