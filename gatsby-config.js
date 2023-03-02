module.exports = {
  pathPrefix: `/blog`,
  siteMetadata: {
    title: "Nathan Phennel's Blog | Software, music, innovations and other things worth knowing about.",
    description: "Notes and memos on the things that cross my path.",
    // TODO: remove /blog? to fix image path issues on direct link?
    siteUrl: `https://enphnt.github.io/blog/`,
    image: "/images/profile-pic.png"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: 156,
              icon: `<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
              isIconAfterHeader: true,
            },
          },
          {
            resolve: `gatsby-remark-table-of-contents`,
            options: {
              exclude: "Table of Contents",
              tight: false,
              ordered: false,
              fromHeading: 1,
              toHeading: 6,
              className: "table-of-contents"
            },
          }
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
        // Ignore files starting with a dot
        ignore: [`**/\.*`],
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
    {
      resolve: `gatsby-source-filesystem`,
      mediaType: "audio/mpeg",
      options: {
        path: `${__dirname}/static/audio`,
        name: 'audio',
        // Ignore files starting with a dot
        ignore: [`**/\.*`],
      },
    },
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
          };

          // mark homepage as higher priority
          if (path === "/") {
            return {
              ...result,
              priority: 0.7,
            };
          }

          return {
            ...result,
            priority: 0.5,
          };
        }
      },
    },
  ],
};
