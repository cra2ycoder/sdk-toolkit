const shell = require('shelljs')
const { execSync } = require('child_process')

const createFolder = nameOrPath => shell.mkdir('-p', nameOrPath)

const removeFolder = nameOrPath => shell.rm('-rf', nameOrPath)

const removeFile = nameOrPath => shell.rm('-rf', nameOrPath)

const copyFile = (srcFile, destFile) => shell.cp('-r', srcFile, destFile)

/**
 * @see
 * https://nodejs.org/api/child_process.html#child_process_child_process_execsync_command_options
 */
const run = (cmd = '', options = {}) => {
  const { env, ...rest } = options
  // console.log({ rest })

  try {
    execSync(cmd, {
      stdio: 'inherit',
      env: {
        ...process.env,
        NODE_ENV: env || 'development',
        ...rest,
      },
    })
  } catch (syncException) {
    // printMessage('could not exec command' + syncException)
  }
}

/**
 * @note
 * compile the file with node
 */
const runNode = (script = '', opts = undefined) => {
  run(`node ${script}`, opts)
}

/**
 * @note
 * rollup commands will be done here
 */
const runRollup = (filePath = '', opts = undefined) => {
  run(`rollup -c ${filePath}`, opts)
}

/**
 * @note
 * remove/delete the dist folder
 */
const cleanDir = (dir = undefined) => {
  //   runNode('scripts/clean.js', {
  //     DIR: dir,
  //   })
}

/**
 * @note
 * watching the node server on each changes
 */
const watchNode = (script = '', opts = undefined) => {
  run(`npx nodemon ${script}`, opts)
}

module.exports = {
  createFolder,
  removeFolder,
  removeFile,
  copyFile,
  run,
  runNode,
  runRollup,
  watchNode,
  cleanDir,
}
