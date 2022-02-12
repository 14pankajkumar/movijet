const siteUrl = 'https://movijet.xyz'

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', disallow: '/auth' },
      { userAgent: '*', allow: '/' },
    ],
    additionalSitemap: [
      `${siteUrl}/sitemap.xml`,
      `${siteUrl}/sitemap-0.xml`,
      `${siteUrl}/genres-sitemap.xml`,
      `${siteUrl}/genres-action-sitemap.xml`,
      `${siteUrl}/genres-adventure-sitemap.xml`,
      `${siteUrl}/genres-animation-sitemap.xml`,
      `${siteUrl}/genres-comedy-sitemap.xml`,
      `${siteUrl}/genres-crime-sitemap.xml`,
      `${siteUrl}/genres-documentary-sitemap.xml`,
      `${siteUrl}/genres-drama-sitemap.xml`,
      `${siteUrl}/genres-family-sitemap.xml`,
      `${siteUrl}/genres-fantasy-sitemap.xml`,
      `${siteUrl}/genres-history-sitemap.xml`,
      `${siteUrl}/genres-horror-sitemap.xml`,
      `${siteUrl}/genres-music-sitemap.xml`,
      `${siteUrl}/genres-mystery-sitemap.xml`,
      `${siteUrl}/genres-romance-sitemap.xml`,
      `${siteUrl}/genres-scifi-sitemap.xml`,
      `${siteUrl}/genres-tvmovies-sitemap.xml`,
      `${siteUrl}/genres-thriller-sitemap.xml`,
      `${siteUrl}/genres-war-sitemap.xml`,
      `${siteUrl}/genres-western-sitemap.xml`,
    ],
  },
}
