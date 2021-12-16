const shell = require('shelljs')

const createFolder = nameOrPath => shell.mkdir('-p', nameOrPath)

const removeFolder = nameOrPath => shell.rm('-rf', nameOrPath)

const removeFile = nameOrPath => shell.rm('-rf', nameOrPath)

const copyFile = (srcFile, destFile) => shell.cp('-r', srcFile, destFile)

module.exports = { createFolder, removeFolder, removeFile, copyFile }
