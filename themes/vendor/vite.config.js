import { defineConfig } from 'vite'

import copyPlugin from 'rollup-plugin-copy'

export default defineConfig({
  build: {
    rollupOptions: {
      plugins: copyPlugin({
        targets: [{ src: 'node_modules/mathjax/es5/output/chtml/fonts/woff-v2/*', dest: 'public/js/vendor/output/chtml/fonts/woff-v2' }], // 将文件复制到 public 目录下, vite会自动复制到dist目录
      }),
      output: {
        minifyInternalExports: true,
        entryFileNames: 'js/vendor/main.min.js',
        assetFileNames: (info) => {
          return 'css/vendor/main.min.css'
        }
      }
    },
    outDir: "static",
    minify: 'esbuild',
    lib: {
      entry: {
        // "sty":'./lib/style.css',
        "main.min": './lib/main.js',
      },
      // name: 'main',
      // fileName: 'sss/main.min',
      formats: ['es']
    },
  },
})
