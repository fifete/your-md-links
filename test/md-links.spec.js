const mdLinks = require('../src/md-links.js')
const directoryPath = 'C:/Users/cosmo/Documents/Laboratoria_proyects/your-md-links/folder-tests/folderB'
const filePath = 'C:/Users/cosmo/Documents/Laboratoria_proyects/your-md-links/folder-tests/folderB/folderC/filemd3.md'
const nullPath = 'C:/Users/cosmo/Documents/Laboratoria_proyects/your-md-links/folderB'
const validateTrueforDirectory = [
  {
    href: 'https://docs.npmjs.com/files/package.json',
    text: 'package.json - Documentación oficial (en inglés)',
    file: 'C:/Users/cosmo/Documents/Laboratoria_proyects/your-md-links/folder-tests/folderB/filemd2.md',
    status: 200,
    message: 'ok'
  },
  {
    href: 'https://docs.npmjs.com/misc/scripts/',
    text: 'scripts - Documentación oficial (en inglés)',
    file: 'C:/Users/cosmo/Documents/Laboratoria_proyects/your-md-links/folder-tests/folderB/filemd2.md',
    status: 200,
    message: 'ok'
  },
  {
    href: 'https://nodejs.org/api/process.ht',
    text: 'Process - Documentación oficial (en inglés)',
    file: 'C:/Users/cosmo/Documents/Laboratoria_proyects/your-md-links/folder-tests/folderB/filemd2.md',
    status: 404,
    message: 'Fail'
  },
  {
    href: 'https://www.youtube.com/watch?v=Lub5qOmY4JQ',
    text: 'recurso',
    file: 'C:/Users/cosmo/Documents/Laboratoria_proyects/your-md-links/folder-tests/folderB/folderC/filemd3.md',
    status: 200,
    message: 'ok'
  },
  {
    href: 'https://pages.github.co/',
    text: 'git hub pages',
    file: 'C:/Users/cosmo/Documents/Laboratoria_proyects/your-md-links/folder-tests/folderB/folderC/filemd3.md',
    status: 'Failed request',
    message: 'Fail'
  }
]

const validateFalseforDirectory = [
  {
    href: 'https://docs.npmjs.com/files/package.json',
    text: 'package.json - Documentación oficial (en inglés)',
    file: 'C:/Users/cosmo/Documents/Laboratoria_proyects/your-md-links/folder-tests/folderB/filemd2.md',
  },
  {
    href: 'https://docs.npmjs.com/misc/scripts/',
    text: 'scripts - Documentación oficial (en inglés)',
    file: 'C:/Users/cosmo/Documents/Laboratoria_proyects/your-md-links/folder-tests/folderB/filemd2.md',
  },
  {
    href: 'https://nodejs.org/api/process.ht',
    text: 'Process - Documentación oficial (en inglés)',
    file: 'C:/Users/cosmo/Documents/Laboratoria_proyects/your-md-links/folder-tests/folderB/filemd2.md',
  },
  {
    href: 'https://www.youtube.com/watch?v=Lub5qOmY4JQ',
    text: 'recurso',
    file: 'C:/Users/cosmo/Documents/Laboratoria_proyects/your-md-links/folder-tests/folderB/folderC/filemd3.md',
  },
  {
    href: 'https://pages.github.co/',
    text: 'git hub pages',
    file: 'C:/Users/cosmo/Documents/Laboratoria_proyects/your-md-links/folder-tests/folderB/folderC/filemd3.md',
  }
]

const validateTrueforFile = [
  {
    href: 'https://www.youtube.com/watch?v=Lub5qOmY4JQ',
    text: 'recurso',
    file: 'C:/Users/cosmo/Documents/Laboratoria_proyects/your-md-links/folder-tests/folderB/folderC/filemd3.md',
    status: 200,
    message: 'ok'
  },
  {
    href: 'https://pages.github.co/',
    text: 'git hub pages',
    file: 'C:/Users/cosmo/Documents/Laboratoria_proyects/your-md-links/folder-tests/folderB/folderC/filemd3.md',
    status: 'Failed request',
    message: 'Fail'
  }
]

const validateFalseforFile = [
  {
    href: 'https://www.youtube.com/watch?v=Lub5qOmY4JQ',
    text: 'recurso',
    file: 'C:/Users/cosmo/Documents/Laboratoria_proyects/your-md-links/folder-tests/folderB/folderC/filemd3.md',
  },
  {
    href: 'https://pages.github.co/',
    text: 'git hub pages',
    file: 'C:/Users/cosmo/Documents/Laboratoria_proyects/your-md-links/folder-tests/folderB/folderC/filemd3.md',
  }
]

describe('Validate links', () => {
  it('validate false for directory / output: href, text, file', async () => {
    await expect(mdLinks(directoryPath, { validate: false })).resolves.toEqual(validateFalseforDirectory)
  })
  it('validate true for directory / output: href, text, file', async () => {
    await expect(mdLinks(directoryPath, { validate: true })).resolves.toEqual(validateTrueforDirectory)
  })
  it('validate false for file / output: href, text, file', async () => {
    await expect(mdLinks(filePath, { validate: false })).resolves.toEqual(validateFalseforFile)
  })
  it('validate true for file / output: href, text, file', async () => {
    await expect(mdLinks(filePath, { validate: true })).resolves.toEqual(validateTrueforFile)
  })
  it('validate false / output: href, text, file', async () => {
    await expect(mdLinks(nullPath, { validate: false })).rejects.toThrow('Path does not exist')
  })
})
