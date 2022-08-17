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
const filePath = 'C:\\Users\\cosmo\\Documents\\Laboratoria_proyects\\your-md-links\\folder-tests\\filemd1.md'
const directoryPath = 'C:\\Users\\cosmo\\Documents\\Laboratoria_proyects\\your-md-links\\folder-tests'
const markdownFile = 'C:/Users/cosmo/Documents/Laboratoria_proyects/your-md-links/folder-tests/filemd1.md'
const txtFile = 'C:\\Users\\cosmo\\Documents\\Laboratoria_proyects\\your-md-links\\folder-tests\\file.txt'
const outputLinks = [
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    file: 'C:/Users/cosmo/Documents/Laboratoria_proyects/your-md-links/folder-tests/filemd1.md'
  },
  {
    href: 'https://nodejs.org/',
    text: 'Node.js',
    file: 'C:/Users/cosmo/Documents/Laboratoria_proyects/your-md-links/folder-tests/filemd1.md'
  },
  {
    href: 'https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg',
    text: 'md-links-image-from-github de laboratoria cohort L',
    file: 'C:/Users/cosmo/Documents/Laboratoria_proyects/your-md-links/folder-tests/filemd1.md'
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
/* describe('isDirectory', () => {
  it('should return true if the path is a directory', () => {
    expect(isDirectory(path)).toBe(true)
  })
  it('should return false if the path is not a directory', () => {
    expect(isDirectory(falsePath)).toBe(false)
  })
  it('should return false if the path is empty', () => {
    expect(isDirectory('')).toBe(false)
  })
})
describe('readDirectory', () => {
  it('should return an array of files', () => {
    expect(readDirectory(path)).toEqual(['filemd1.md', 'filemd2.md'])
  })
  it('should return an empty array if the path is not a directory', () => {
    expect(readDirectory(falsePath)).toEqual([])
  })
  it('should return an empty array if the path is empty', () => {
    expect(readDirectory('')).toEqual([])
  })
}) */
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
