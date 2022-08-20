// get number of links from array
const getNumberOfLinks = links => {
  const numberOfLinks = links.length
  return `Total: ${numberOfLinks}`
}

// get unique links from array with objects with the property href using Set
const getUniqueLinks = links => {
  const uniqueLinks = new Set()
  links.forEach(link => uniqueLinks.add(link.href))
  return `Unique: ${uniqueLinks.size}`
}

// get number of broken links from array with objects with the property message 'Fail'
const getNumberOfBrokenLinks = links => {
  const numberOfBrokenLinks = links.filter(link => link.message === 'Fail').length
  return `Broken: ${numberOfBrokenLinks}`
}

module.exports = {
  getNumberOfLinks,
  getUniqueLinks,
  getNumberOfBrokenLinks
}
