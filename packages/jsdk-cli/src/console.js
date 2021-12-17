const chalk = require('chalk')
const boxen = require('boxen')

const printHelpLog = () => {
  const logs = ` 
    ${chalk.blue.inverse('<< JSDK Compiler >>')}
    ${chalk.red('A modern way to compile jsdk.')}
    ${chalk.dim('--help')}  : ${chalk.green('shows help')}
    ${chalk.dim('--compile')}: ${chalk.green('helps to compile file into jsdk')}
    ${chalk.dim('--examples')}: ${chalk.green('shows sample commands')}
  `

  const view = boxen(logs, {
    borderColor: 'grey',
    padding: 1,
    borderStyle: 'classic',
  })
  console.log(view)
}

const printErrorLog = msg => {
  const logs = ` 
    ${chalk.blue.inverse('<< Error Found: >>')}
    ${chalk.red(msg)}
  `
  const view = boxen(logs, {
    borderColor: 'red',
    padding: 1,
    borderStyle: 'classic',
  })
  console.log(view)
}

const printExampleLog = (taskType, errorMsg = '') => {
  const logs = `${chalk.blue.inverse('<< JSDK Compiler >>')}\n${chalk.red(
    errorMsg
  )}\n`

  const commands = {
    compile: [
      {
        title: 'compile commands',
        list: [
          `jsdk --compile file=<FILE_NAME>`,
          `jsdk --c file=<FILE_NAME>`,
          `jsdk --compile folder=<FOLDER_NAME>`,
          `jsdk --c folder=<FOLDER_NAME>`,
        ],
      },
      {
        title: 'compile commands with path',
        list: [
          `jsdk --compile file=<FILE_NAME> path=<FILE_PATH>`,
          `jsdk --c file=<FILE_NAME> path=<FILE_PATH>`,
          `jsdk --compile folder=<FOLDER_NAME> path=<FOLDER_PATH>`,
          `jsdk --c folder=<FOLDER_NAME> path=<FOLDER_PATH>`,
        ],
      },
    ],
  }

  const getMsg = () => {
    let cmdString = ``
    Object.entries(commands).forEach(data => {
      const [, commandList = []] = data

      commandList.forEach(({ title, list }) => {
        cmdString += chalk.grey(`## ${title}\n`)
        cmdString += list
          .map(cmd => {
            const [cli, action, ...params] = cmd.split(' ')
            return `${chalk.yellow(cli)} ${chalk.whiteBright(
              action
            )} ${chalk.green(params.join(' '))}\n`
          })
          .join('')
        cmdString += `\n`
      })
    })
    return cmdString
  }

  const view = boxen(logs + getMsg(), {
    borderColor: 'red',
    padding: 1,
    borderStyle: 'classic',
  })

  console.log(view)
}

module.exports = {
  printHelpLog,
  printErrorLog,
  printExampleLog,
}
