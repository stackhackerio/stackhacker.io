import { toRule, author } from '@metascraper/helpers'

const toAuthor = toRule(author)

module.exports = () => ({
  author: [
    toAuthor(($: any) => $('meta[name="og:site_name"]').attr('content')),
    toAuthor(($: any) => $('meta[name="twitter:site"]').attr('content')),
    toAuthor(($: any) => $('meta[name="twitter:creator"]').attr('content')),
  ],
})
