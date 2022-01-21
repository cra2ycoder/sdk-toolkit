import nodeResolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'

/**
 * @description
 * extracting the inputs from process.env
 */
const { fileLocation: input = '', format, fileName } = process.env

const outputFileLocation = `${input.substring(0, input.lastIndexOf('/'))}`
const outputFileName = `${fileName}.js`

export default {
  input,
  output: {
    file: `${outputFileLocation}/${outputFileName}`,
    format,
    name: fileName,
  },
  plugins: [nodeResolve(), typescript({ tsconfig: './tsconfig.json' })],
}
