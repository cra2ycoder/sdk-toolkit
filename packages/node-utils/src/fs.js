const fs = require('fs')
const path = require('path')
const { createFolder } = require('./command')

const isAvailable = fileLocation => {
  const filePath = path.resolve(__dirname, fileLocation)
  return fs.existsSync(filePath) === true
}

const readFile = fileLocation => {
  const filePath = path.resolve(__dirname, fileLocation)
  //   console.log({ filePath })
  const content = fs.readFileSync(filePath)
  const contentAsString = content.toString()
  return contentAsString
}

const createFile = (fileLocation, fileName, content) => {
  const filePath = path.resolve(__dirname, fileLocation + '/' + fileName)
  fs.writeFileSync(filePath, content)
}

const hasFile = location => isAvailable(location)
const hasFolder = location => isAvailable(location)

module.exports = {
  isAvailable,
  createFile,
  readFile,
  hasFile,
  hasFolder,
}
