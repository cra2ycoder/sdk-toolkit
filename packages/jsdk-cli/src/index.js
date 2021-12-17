const arg = require('arg')
const { printHelpLog, printErrorLog, printExampleLog } = require('./console')
const { bundleNow } = require('./bundle')

const commands = {
  // main commands
  '--help': Boolean,
  '--examples': Boolean,
  '--create': Boolean,
  '--bundle': Boolean,
  // '--zip': Boolean,
  '--path': String,
  '--yes': Boolean,

  // alias
  '-c': '--create',
  '-b': '--bundle',
  // '-z': '--zip',
  '-y': '--yes',
}

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
  if (args['--help']) {
    return 'help'
  }

  if (args['--examples']) {
    return 'examples'
  }

  if (args['--bundle']) {
    return 'bundle'
  }

  return ''
}

const parseArgs = rawArgs => {
  const opt = arg(commands, {
    argv: rawArgs.slice(2),
  })

  console.log({ opt })

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
