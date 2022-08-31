const verifyLinks = require('../src/validate.js')
const fetch = require('node-fetch')
jest.mock('node-fetch')

describe('verifyLinks must give 200 status code for valid links', () => {
  it("status: 200 - message: 'ok'", () => {
    const recieveObject = [
      {
        href: 'https://docs.npmjs.com/files/package.json',
        text: 'package.json - Documentación oficial (en inglés)',
        file: 'C:/Users/cosmo/Documents/Laboratoria_proyects/your-md-links/folder-tests/folderB/filemd2.md'
      }
    ]
    const resultObject = [
      {
        href: 'https://docs.npmjs.com/files/package.json',
        text: 'package.json - Documentación oficial (en inglés)',
        file: 'C:/Users/cosmo/Documents/Laboratoria_proyects/your-md-links/folder-tests/folderB/filemd2.md',
        status: 200,
        message: 'ok'
      }
    ]
    fetch.mockResolvedValueOnce({ status: 200, ok: true })
    verifyLinks(recieveObject)
      .then((result) => {
        expect(result).toEqual(resultObject)
      })
  })
})
