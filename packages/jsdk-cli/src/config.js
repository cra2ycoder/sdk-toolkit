const MAIN_TITLE = '<< JSDK COMPILER >>'
const DESC = 'A modern way to compile jsdk.'

const HELP = [
  '--help:shows help',
  '--compile:helps to compile file into jsdk',
  '--examples:shows sample commands',
]

const COMMANDS = {
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

const SCRIPTS = {
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

module.exports = {
  MAIN_TITLE,
  DESC,
  HELP,
  COMMANDS,
  SCRIPTS,
}
