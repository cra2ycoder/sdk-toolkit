const arg = require('arg')
const { printHelpLog, printErrorLog, printExampleLog } = require('./console')
const { bundleNow } = require('./bundle')
const { COMMANDS, ALIAS, PARAMS } = require('./config')

const getTaskFor = value => {
  let [name, inputs] = value ? value.split('=').filter(Boolean) : ['', '']

  /**
   * @note
   * converting the multiple inputs as array list
   */
  if (inputs !== undefined && inputs.includes(',') === true) {
    inputs = inputs.split(',').filter(Boolean)
  }
  return { taskFor: name, inputs }
}

const getTaskType = args => {
  const [, cmd] = Object.keys(args) || []
  if (args[cmd]) {
    return cmd.replace('--', '')
  }
  return ''
}

const parseArgs = rawArgs => {
  const opt = arg(COMMANDS, {
    argv: rawArgs.slice(2),
  })

  // console.log({ opt })

  return {
    skipPrompt: opt['--yes'] || false,
    task: getTaskType(opt),
    path: opt['--path'] || '',
    ...getTaskFor(opt._[0]),
  }
}

const options = parseArgs(process.argv)

const {
  skipPrompt = false,
  task = '',
  path = '',
  taskFor = '',
  inputs = '',
} = options

const validate = () => {
  if (taskFor === '') {
    printExampleLog(task, `Please enter valid ${task} command.`)
    return false
  }
  if (inputs === '') {
    printErrorLog('Please enter valid input to proceed.')
    return false
  }
  return true
}

console.log({ task })

if (task === 'help' || task === '') {
  printHelpLog()
} else if (task === 'examples') {
  printExampleLog('all')
} else if (task === 'bundle') {
  if (validate() === true) {
    bundleNow(options)
  }
}
