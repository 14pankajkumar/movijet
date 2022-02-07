const siteUrl = 'https://movijet.vercel.app'

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', disallow: '/auth' },
      { userAgent: '*', allow: '/' },
    ],
    additionalSitemap: [
      `${siteUrl}/xml`,
      `${siteUrl}/sitemap-0.xml`,
      `${siteUrl}/server-sitemap.xml`,
      `${siteUrl}/server-2-sitemap.xml`,
    ],
  },
}
