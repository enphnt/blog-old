import React from 'react';
import Link from 'gatsby-link';
import Layout from '../components/layout';
import '../templates/styles/blog-listing.css';
export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <Layout>
      <div>
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <Link to={post.frontmatter.path} className="blogPostPreview" key={post.id}>
                <img src={`static/images${post.frontmatter.path}.png`} alt="blog-post-img" />
                <div>
                  <h1 style={{ lineHeight: "1em" }}>
                    {post.frontmatter.title}
                  </h1>
                  <h2>Last Updated: {post.frontmatter.date}</h2>
                  <p style={{ paddingRight: 10 }}>{post.excerpt}</p>
                </div>
              </Link>
            );
          })}
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 180)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;
