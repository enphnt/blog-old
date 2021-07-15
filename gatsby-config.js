module.exports = {
  pathPrefix: `/blog`,
  siteMetadata: {
    title: 'Nathan Phennel Blog',
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
    `gatsby-transformer-remark`,
  ],
}
