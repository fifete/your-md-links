const {
  pathExists,
  isAbsolutePath,
  toAbsolute,
  isDirectory,
  readDirectory,
  isFile,
  isMarkdown,
  readFile,
  getLinks
} = require('../src/api.js')

const existPath = 'C:\\Users\\cosmo\\Documents\\Laboratoria_proyects\\your-md-links\\folder-tests'
const noExistPath = 'C:\\Users\\cosmo\\Documents\\Laboratoria_proyects\\your-md-links\\filemd1.md'
const absolutePath = 'C:\\Users\\cosmo\\Documents\\Laboratoria_proyects\\your-md-links\\folder-tests\\filemd1.md'
const relativePath = 'folder-tests\\filemd1.md'
const filePath = 'C:\\Users\\cosmo\\Documents\\Laboratoria_proyects\\your-md-links\\folder-tests\\folderB\\folderC\\filemd3.md'
const directoryPath = 'C:\\Users\\cosmo\\Documents\\Laboratoria_proyects\\your-md-links\\folder-tests\\folderB\\folderC'
const markdownFile = 'C:/Users/cosmo/Documents/Laboratoria_proyects/your-md-links/folder-tests/folderB/filemd2.md'
const txtFile = 'C:\\Users\\cosmo\\Documents\\Laboratoria_proyects\\your-md-links\\folder-tests\\file.txt'
const outputLinks = [
  {
    href: 'https://docs.npmjs.com/files/package.json',
    text: 'package.json - Documentación oficial (en inglés)',
    file: 'C:/Users/cosmo/Documents/Laboratoria_proyects/your-md-links/folder-tests/folderB/filemd2.md'
  },
  {
    href: 'https://docs.npmjs.com/misc/scripts/',
    text: 'scripts - Documentación oficial (en inglés)',
    file: 'C:/Users/cosmo/Documents/Laboratoria_proyects/your-md-links/folder-tests/folderB/filemd2.md'
  },
  {
    href: 'https://nodejs.org/api/process.ht',
    text: 'Process - Documentación oficial (en inglés)',
    file: 'C:/Users/cosmo/Documents/Laboratoria_proyects/your-md-links/folder-tests/folderB/filemd2.md'
  }
]
// 1. test for verify if the path exists
describe('pathExists', () => {
  it('should return true if the path exists', () => {
    expect(pathExists(existPath)).toBe(true)
  })
  it('should return false if the path does not exists', () => {
    expect(pathExists(noExistPath)).toBe(false)
  })
})
describe('isAbsolutePath', () => {
  it('should return true if the path is absolute', () => {
    expect(isAbsolutePath(absolutePath)).toBe(true)
  })
  it('should return false if the path is not absolute', () => {
    expect(isAbsolutePath(relativePath)).toBe(false)
  })
})
describe('toAbsolute', () => {
  it('should return absolute path', () => {
    expect(toAbsolute(relativePath)).toBe(absolutePath)
  })
})
describe('isDirectory', () => {
  it('should return true if the path is a directory', () => {
    expect(isDirectory(directoryPath)).toBe(true)
  })
  it('should return false if the path is not a directory', () => {
    expect(isDirectory(relativePath)).toBe(false)
  })
})
describe('readDirectory', () => {
  it('should return an array of files', () => {
    expect(readDirectory(existPath)).toEqual(['file.txt', 'filemd1.md', 'folderB'])
  })
  it('should return an empty array if the path is not a directory', () => {
    expect(readDirectory(directoryPath)).toEqual(['filemd3.md'])
  })
})
describe('isFile', () => {
  it('should return true if the path is a file', () => {
    expect(isFile(filePath)).toBe(true)
  })
  it('should return false if the path is not a file', () => {
    expect(isFile(directoryPath)).toBe(false)
  })
})
describe('isMarkdown', () => {
  it('should return true if the path is a markdown file', () => {
    expect(isMarkdown(markdownFile)).toBe(true)
  })
  it('should return false if the path is not a markdown file', () => {
    expect(isMarkdown(txtFile)).toBe(false)
  })
  it('should return false if the path is not a file', () => {
    expect(isMarkdown(directoryPath)).toBe(false)
  })
})
describe('readFile', () => {
  it('should return the content of the file', () => {
    expect(readFile(txtFile)).toEqual('text')
  })
})
describe('getLinks', () => {
  it('should return an array of links', () => {
    expect(getLinks(markdownFile)).toEqual(outputLinks)
  })
})
