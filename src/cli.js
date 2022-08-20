#!/usr/bin/env node

import {
  getNumberOfLinks, getUniqueLinks, getNumberOfBrokenLinks
} from './stats.js'
import { mdLinks } from './md-links.js'

// get all the arguments from the command line excluding the first and second argument
const args = process.argv.slice(2)
if (args.length === 1) {
  // if it is a --help argument, print the help text
  if (args[0] === '--help') {
    console.log(`
    Usage: md-links <path-to-file> [options]
    Options:
      --help                Print this help text
      --validate            Print href, text, file, message(ok or fail) and status.
      --stats               Print total and unique links
      --validate --stats    Print the number of broken links
      --stats --validate    Print total, unique and broken links.
    `)
  } else if (args[0] === '') {
    console.log('⚠ Invalid comand. If you need help, please type --help')
  } else {
    // if it is a file path, call mdLinks function with the path as argument and validate option as false
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

    default: console.log('⚠ Invalid comand. If you need help, please type --help')
  }
}

// if it receives three arguments, path to file and two options --validate and --stats or --stats and --validate
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
    console.log('⚠ Invalid comand. If you need help, please type --help')
  }
}
