const fetch = require('node-fetch')

// verify that all the links in the md file work by making a request to the link
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

module.exports = verifyLinks
