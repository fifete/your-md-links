const fetch = require('node-fetch')

// verify that all the links in the md file work
const verifyLinks = (links) => {
  return Promise.all(links.map(link => {
    return fetch(link.href)
      .then(response => {
        if (response.ok) {
          return {
            ...link,
            status: response.status,
            message: 'ok'
          }
        } else {
          return {
            ...link,
            status: response.status,
            message: 'Fail'
          }
        }
      })
      .catch(() => {
        return {
          ...link,
          status: 'Failed request',
          message: 'Fail'
        }
      })
  }))
}

/* const links = [
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    file: 'C:/Users/cosmo/Documents/Laboratoria_proyects/your-md-links/folder-tests/filemd1.md'
  },
  {
    href: 'https://njs.org/',
    text: 'Node.js',
    file: 'C:/Users/cosmo/Documents/Laboratoria_proyects/your-md-links/folder-tests/filemd1.md'
  },
  {
    href: 'https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg',
    text: 'md-links',
    file: 'C:/Users/cosmo/Documents/Laboratoria_proyects/your-md-links/folder-tests/filemd1.md'
  }
] */
/* function seeStatus(){
  verifyLinks(links)
    .then(links => {
      console.log(links)
    })
    .catch(err => {
      console.log(err)
    })
}
seeStatus()
*/
module.exports = verifyLinks
