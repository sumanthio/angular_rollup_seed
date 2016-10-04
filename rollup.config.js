import typescript from 'rollup-plugin-typescript';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  entry: 'app/main.ts',
  format: 'iife',
  dest: 'build/bundle.js',
  sourceMap: 'inline',
  plugins: [ 
    nodeResolve({ jsnext: true, main: true ,browser: true}),
    typescript()
  
    //alias({ rxjs: __dirname + '/node_modules/rxjs-es' }), // rxjs fix (npm install rxjs-es)
    //nodeResolve({ jsnext: true, main: true })
  ]
}