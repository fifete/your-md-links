const {
  isFile,
  isMarkdown,
  convertToAbsolutePath,
  getLinks
} = require('./api')

const verifyLinks = require('./validate')

const mdLinks = (path, options = { validate: true }) => new Promise((resolve, reject) => {
  const absolutePath = convertToAbsolutePath(path)
  if (isFile(absolutePath)) {
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
      reject(`${absolutePath} is not a markdown file`)
    }
  } else {
    reject(`${absolutePath} does not exist`)
  }
})

/* const read = mdLinks('C:/Users/cosmo/Documents/Laboratoria_proyects/your-md-links/folder-tests/filemd1.md')
read.then(links => {
  console.log(links)
}) */
