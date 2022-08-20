#!/usr/bin/env node

const {
  getNumberOfLinks, getUniqueLinks, getNumberOfBrokenLinks
} = require('./stats.js')
const mdLinks = require('./md-links.js')

// get all the arguments from the command line excluding the first and second argument
const args = process.argv.slice(2)
if (args.length === 1) {
  // if it is a --help argument, print the help text
  if (args[0] === '--help') {
    console.log(`
    Usage: md-links <path-to-file> [options]

    +____________________+_________________________________________________________+
    |      Comands       |                         Output                          |
    +____________________+_________________________________________________________+
    | md-links path      | Print href, text and file.                              |
    +____________________+_________________________________________________________+
    | --stats            | Print total and unique links.                           |
    +____________________+_________________________________________________________+
    | --validate         | Print href, text, file, message(ok or fail) and status. |
    +____________________+_________________________________________________________+
    | --validate --stats | Print total, unique and broken links.                   |
    +____________________+_________________________________________________________+
    | --stats --validate | Print total, unique and broken links.                   |
    +____________________+_________________________________________________________+
    | --help             | Print comands list.                                     |
    +____________________+_________________________________________________________+
    `)
  } else if (args[0] === '') {
    console.log('⚠ Invalid comand. If you need help, please type  md-links --help')
  } else {
    mdLinks(args[0], { validate: false })
      .then(links => {
        console.log(links)
      })
      .catch(err => {
        console.log(err)
      })
  }
}
// if it receives two arguments, path to file and some options verify if the option entered is valid
if (args.length === 2) {
  switch (args[1]) {
    case '--validate':
      mdLinks(args[0], { validate: true })
        .then(links => {
          console.log(links)
        })
        .catch(err => {
          console.log(err)
        })
      break
    case '--stats':
      mdLinks(args[0], { validate: false })
        .then(links => {
          console.log(`
          ${getNumberOfLinks(links)}
          ${getUniqueLinks(links)}
          `)
        })
      break

    default: console.log('⚠ Invalid comand. If you need help, please type  md-links --help')
  }
}

if (args.length === 3) {
  if (
    (args[1] === '--validate' && args[2] === '--stats') ||
    (args[1] === '--stats' && args[2] === '--validate')
  ) {
    mdLinks(args[0], { validate: true })
      .then(links => {
        console.log(`
        ${getNumberOfLinks(links)}
        ${getUniqueLinks(links)}
        ${getNumberOfBrokenLinks(links)}
        `)
      })
      .catch(err => {
        console.log(err)
      })
  } else {
    console.log('⚠ Invalid comand. If you need help, please type  md-links --help')
  }
}
