//
module.exports = {
  pathPrefix: `/blog`,
  siteMetadata: {
    title: 'Nathan Phennel Blog',
    siteUrl: `https://enphnt.github.io/blog/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/images`,
        name: 'images',
      },
    },
    `gatsby-transformer-remark`,
  ],
}
