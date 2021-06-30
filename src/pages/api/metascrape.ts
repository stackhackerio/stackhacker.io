import type { NextApiRequest, NextApiResponse } from 'next'
import absoluteUrl from 'next-absolute-url'

const metascraper = require('metascraper')([
  require('../../lib/metascraper/author')(),
  require('metascraper-author')(),
  require('metascraper-date')(),
  require('metascraper-description')(),
  require('metascraper-image')(),
  require('metascraper-logo-favicon')(),
  require('metascraper-clearbit')(),
  require('metascraper-publisher')(),
  require('metascraper-title')(),
  require('metascraper-url')(),
])
import got from 'got'

const metascrape = async (req: NextApiRequest, res: NextApiResponse) => {
  const { origin } = absoluteUrl(req)

  const {
    query: { href },
  } = req

  const h: string | string[] = /^http/.test(href as string)
    ? href
    : origin + href

  const { body: html, url } = await got(h as string)
  const metadata = await metascraper({ html, url })

  res.statusCode = 200

  res.json(metadata)
}

export default metascrape
