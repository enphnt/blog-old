import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default function Template({ data }) {
  const post = data.markdownRemark;

  return (
    <Layout>
      <div>
        <Helmet title={`Nathan Phennel - ${post.frontmatter.title}`} />
        <div className="blogPost">
          <div className="breadcrumbs">
            <Link className="breadcrumbLink" to="/">Home</Link>
            <div className="breadcrumbLink-separator">{`>`}</div>
            <Link className="breadcrumbLink" to={post.frontmatter.path}>{post.frontmatter.title}</Link>
          </div>
          <h5>Last Updated: {post.frontmatter.date}</h5>
          <h1>{post.frontmatter.title}</h1>
          <div
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <Link to="/">Go back to the homepage</Link>
        </div>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
