const inquirer = require('inquirer')

const validateName = input => {
  if (input.trim() === '') {
    return 'Enter a valid name'
  }
  if (new RegExp(/[\W0-9_]/, 'g').test(input) === true) {
    return 'The value should not contain space or special characters!'
  }
  return true
}

const getRollupConfig = async props => {
  const { inputs } = props

  const questions = [
    {
      type: 'list',
      name: 'type',
      message: 'Please choose file format:',
      choices: ['es', 'amd', 'cjs', 'iife', 'umd', 'system'],
      default: 'iife',
    },
    {
      type: 'string',
      name: 'bundleName',
      message: 'Please enter file name:',
      default: inputs,
    },
  ]
  return await inquirer.prompt(questions)
}

module.exports = {
  getRollupConfig,
}
