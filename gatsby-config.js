//
module.exports = {
  pathPrefix: `/blog`,
  siteMetadata: {
    title: "Software, music, innovations and other things worth knowing about. | Nathan Phennel's Blog",
    description: "Notes and memos on the things that cross my path.",
    siteUrl: `https://enphnt.github.io/blog/`,
    image: "/images/profile-pic.png"
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
        // Ignore files starting with a dot
        ignore: [`**/\.*`],
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://enphnt.github.io/blog', // truncated in the robots.txt result. not sure if it'll work.
        sitemap: 'https://enphnt.github.io/blog/sitemap/sitemap-0.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      }
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        excludes: ['/page-2', '/confirmed'],
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              nodes {
                path
              }
            }
            allMarkdownRemark {
              nodes {
                frontmatter {
                  path
                  date
                }
              }
            }
          }`,
        resolveSiteUrl: ({ site: { siteMetadata } }) => {
          return siteMetadata.siteUrl + "blog";
        },
        serialize: ({ path }) => {
          const result = {
            url: `blog${path}`,
            changefreq: "monthly",
          }

          // mark homepage as higher priority
          if (path === "/") {
            return {
              ...result,
              priority: 0.7,
            }
          }

          return {
            ...result,
            priority: 0.5,
          }
        }
      },
    }
  ],
}
