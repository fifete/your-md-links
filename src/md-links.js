const {
  isDirectory,
  isFile,
  isMarkdown,
  convertToAbsolutePath,
  getFiles,
  getLinks
} = require('./api')

const verifyLinks = require('./validate')

const mdLinks = (path, options = { validate: false }) => new Promise((resolve, reject) => {
  const absolutePath = convertToAbsolutePath(path)
  if (isDirectory(absolutePath)) {
    const files = getFiles(absolutePath)
    const links = files.map(file => getLinks(file))
    const allLinks = [].concat(...links)
    if (options.validate) {
      // resolve(verifyLinks(allLinks))
      verifyLinks(allLinks)
        .then(links => {
          resolve(links)
        }).catch(err => {
          reject(err)
        })
    } else {
      resolve(allLinks)
    }
  } else if (isFile(absolutePath)) {
    if (isMarkdown(absolutePath)) {
      const links = getLinks(absolutePath)
      if (options.validate) {
        verifyLinks(links)
          .then(links => {
            resolve(links)
          }).catch(err => {
            reject(err)
          })
      } else {
        resolve(links)
      }
    } else {
      reject(new Error('The path is not a markdown file'))
    }
  } else {
    reject(new Error('The path is not a directory or a file'))
  }
})

/* const read = mdLinks('C:/Users/cosmo/Documents/Laboratoria_proyects/your-md-links/folder-tests/folderB')
read.then(links => {
  console.log(links)
}).catch(err => {
  console.log(err)
}) */

module.exports = mdLinks
