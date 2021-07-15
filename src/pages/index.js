import React from 'react';
import Link from 'gatsby-link';
import '../templates/styles/blog-listing.css';
export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <div className="blog-posts">
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {
          return (
            <Link to={post.frontmatter.path} className="blog-post-preview" key={post.id}>
              <img src={`static/images${post.frontmatter.path}.png`} />
              <div>
                <h1 style={{ lineHeight: "1em" }}>
                  {post.frontmatter.title}
                </h1>
                <h2>Last Updated: {post.frontmatter.date}</h2>
                <p>{post.excerpt}</p>
              </div>
            </Link>
          );
        })}
    </div>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
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
