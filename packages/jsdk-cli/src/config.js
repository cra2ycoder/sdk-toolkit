const MAIN_TITLE = '<< JSDK COMPILER >>'
const DESC = 'A modern way to compile jsdk.'

const HELP = [
  '--help:shows help',
  '--examples:shows sample commands',
  '--compile:helps to compile file and preview',
  '--bundle:helps to bundle the files',
]

const COMMANDS = {
  // main commands
  '--help': Boolean,
  '--examples': Boolean,
  '--compile': Boolean,
  '--bundle': Boolean,
  '--yes': Boolean,
}

const ALIAS = {
  // alias
  '-c': '--compile',
  '-b': '--bundle',
  '-y': '--yes',
  '-p': '--path',
}

const PARAMS = {
  '--path': String,
}

const SCRIPTS = {
  compile: [
    {
      title: 'compile commands',
      list: [
        `jsdk --compile file=<fileName | fileName.js | fileName.ts | fileName.tsx | fileName.jsx>`,
        `jsdk --c file=<fileName | fileName.js | fileName.ts | fileName.tsx | fileName.jsx>`,
        `jsdk --compile folder=<FOLDER_NAME>`,
      ],
    },
    {
      title: 'compile commands with path',
      list: [
        `jsdk --compile file=./path/<FILE_NAME>`,
        `jsdk --c file=./path/<FILE_NAME>`,
        `jsdk --compile folder=./path/<FOLDER_NAME>`,
        `jsdk --c folder=./path/<FOLDER_NAME>`,
      ],
    },
  ],
  bundle: [
    {
      title: 'bundle commands',
      list: [
        `jsdk --bundle file=<FILE_NAME>`,
        `jsdk --b file=<FILE_NAME>`,
        `jsdk --bundle folder=<FOLDER_NAME>`,
        `jsdk --b folder=<FOLDER_NAME>`,
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
  PARAMS,
  ALIAS,
}
