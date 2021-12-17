const chalk = require('chalk')
const boxen = require('boxen')
const { MAIN_TITLE, DESC, HELP, SCRIPTS } = require('./config')

const printHelpLog = () => {
  let logs = ` ${chalk.blue.inverse(MAIN_TITLE)}\n${chalk.red(DESC)}\n\n`

  logs += HELP.map(x => {
    const [cmd, desc] = x.split(':')
    return `${chalk.dim(cmd)} : ${chalk.green(desc)}`
  }).join('\n')

  const view = boxen(logs.trim(), {
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
  const logs = `${chalk.blue.inverse(MAIN_TITLE)}\n${chalk.red(errorMsg)}\n`

  const getMsg = () => {
    let cmdString = ``
    Object.entries(SCRIPTS).forEach(data => {
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
