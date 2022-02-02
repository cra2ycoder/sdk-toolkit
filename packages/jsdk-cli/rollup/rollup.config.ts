import nodeResolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'

/**
 * @description
 * extracting the inputs from process.env
 */
const { fileLocation: input = '', format, fileName } = process.env

const outputFileLocation = `${input.substring(0, input.lastIndexOf('/'))}`
const outputFileName = `${fileName}`

export default {
  input,
  // output: {
  //   file: `${outputFileLocation}/${outputFileName}`,
  //   format,
  //   name: fileName,
  // },
  output: [
    {
      file: `${outputFileLocation}/${outputFileName}.iife.js`,
      format: 'iife',
      name: fileName,
    },
    { file: `${outputFileLocation}/${outputFileName}.cjs.js`, format: 'cjs' },
    {
      file: `${outputFileLocation}/${outputFileName}.min.js`,
      format: 'cjs',
      plugins: [
        terser({
          output: {
            comments: (node, comment) => {
              if (comment.type === 'comment2') {
                return /@preserve|@license|@cc_on/i.test(comment.value)
              }
              return true
            },
          },
        }),
      ],
    },
    { file: `${outputFileLocation}/${outputFileName}.esm.js`, format: 'esm' },
  ],
  plugins: [nodeResolve(), typescript({ tsconfig: './tsconfig.json' })],
}
