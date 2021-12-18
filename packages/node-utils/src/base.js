const fs = require('fs')
const path = require('path')
const { removeFile } = require('./command')

/**
 * @note
 * relative folder path to absolute folder path
 */
const getAbsolutePath = (relativePath = '') => {
  return path.resolve(__dirname, `${relativePath}`)
}

/**
 * @note
 * get the list of folder from the path
 */
const getFolderListFromPath = folderPath => {
  folderPath = getAbsolutePath(folderPath)

  return fs
    .readdirSync(folderPath)
    .map(folder => `${folderPath}/${folder}`)
    .filter(x => fs.statSync(x).isDirectory())
}

/**
 * @note
 * get the list of files from the path
 */
const getFilesListFromPath = (folderPath, format) => {
  folderPath = getAbsolutePath(folderPath)

  return fs.readdirSync(folderPath).filter(file => {
    const splitNames = file.split('.')
    return splitNames[splitNames.length - 1] === format
  })
}

/**
 * @note
 * removing all the sub folders
 */
const removeSubFolders = folderPath => {
  // console.log({ folderPath })
  const subFolderList = getFolderListFromPath(folderPath)
  /**
   * @note
   * removing sub folders
   */
  subFolderList.forEach(subFolder => {
    removeFile(subFolder)
  })
}

module.exports = {
  getAbsolutePath,
  getFolderListFromPath,
  getFilesListFromPath,
  removeSubFolders,
}
