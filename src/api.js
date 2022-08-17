// import file system module
const fs = require('fs')
// import path module
const path = require('path')

// 1. Verify if the path exists
const pathExists = path => fs.existsSync(path)

// 2. Verify if the path is absolute
// const isAbsolute = path => path.startsWith('/')
const isAbsolutePath = (inputPath) => path.isAbsolute(inputPath)

// 3. Convert relative path to absolute path
const toAbsolute = inputPath => path.resolve(inputPath)

// 3.1. Convert to absolute path
const convertToAbsolutePath = path => {
  if (pathExists(path)) {
    if (isAbsolutePath(path)) {
      return path
    } else {
      return toAbsolute(path)
    }
  } else {
    console.log(`${path} does not exist`)
  }
}

// 4. Know if the path is a directory
const isDirectory = path => fs.lstatSync(path).isDirectory()

// 5. Read the content of a directory
const readDirectory = path => fs.readdirSync(path)

// 6. Know if the path is a file
const isFile = path => fs.lstatSync(path).isFile()

// 7. Validate if path extension is md
const isMarkdown = path => path.endsWith('.md')

// 8. Read the content of a file
const readFile = path => fs.readFileSync(path, 'utf8')

// 8.1. Get links from a md file
const getLinks = path => {
  const content = readFile(path)
  const regex = /\[(.*)\]\(((?:\/|https?:\/\/).*)\)/g
  const links = []
  let match
  while ((match = regex.exec(content)) !== null) {
    links.push({
      href: match[2],
      text: match[1].substring(0, 50), // limit text to 50 chars
      file: path
    })
  }
  return links
}

// Making a proof
// const read = getLinks('C:/Users/cosmo/Documents/Laboratoria_proyects/your-md-links/folder-tests/filemd1.md')
const read = getLinks('C:/Users/cosmo/Documents/Laboratoria_proyects/your-md-links/folder-tests/filemd1.md')

console.log(read)
module.exports = {
  pathExists,
  isAbsolutePath,
  toAbsolute,
  isDirectory,
  readDirectory,
  convertToAbsolutePath,
  isFile,
  isMarkdown,
  readFile,
  getLinks,
}