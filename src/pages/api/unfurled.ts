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
const got = require('got')

const metascrape = async (req: NextApiRequest, res: NextApiResponse) => {
  const { origin } = absoluteUrl(req)

  const {
    query: { href },
  } = req

  const h = /^http/.test(href) ? href : origin + href

  const { body: html, url } = await got(h)
  const metadata = await metascraper({ html, url })

  res.statusCode = 200

  res.json(metadata)
}

export default metascrape
