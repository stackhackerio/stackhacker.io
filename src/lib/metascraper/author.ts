'use strict'

const { toRule, author } = require('@metascraper/helpers')

const toAuthor = toRule(author)

module.exports = () => ({
  author: [
    toAuthor(($) => $('meta[name="og:site_name"]').attr('content')),
    toAuthor(($) => $('meta[name="twitter:site"]').attr('content')),
    toAuthor(($) => $('meta[name="twitter:creator"]').attr('content')),
  ],
})
