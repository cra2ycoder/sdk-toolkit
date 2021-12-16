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

const getCreateProjectConfig = async () => {
  const questions = [
    {
      type: 'list',
      name: 'type',
      message: 'Please choose your project type?',
      choices: ['Only Studio', 'Non Studio', 'Hybrid', 'JSDK'],
      default: 'hybrid',
    },
  ]
  return await inquirer.prompt(questions)
}

const getCreateWidgetConfig = async () => {
  const questions = [
    {
      type: 'input',
      name: 'type',
      message: 'Please enter your widget name?',
      validate: validateName,
    },
  ]
  return await inquirer.prompt(questions)
}

const getCreateComponentConfig = async () => {
  const questions = [
    {
      type: 'input',
      name: 'type',
      message: 'Please enter your component name?',
      validate: validateName,
    },
  ]
  return await inquirer.prompt(questions)
}

module.exports = {
  getCreateProjectConfig,
  getCreateWidgetConfig,
  getCreateComponentConfig,
}
