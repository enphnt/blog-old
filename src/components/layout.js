import React from 'react';
import { StaticQuery, graphql } from "gatsby"
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Media from 'react-media';

import Header from '../components/header';
import Sidebar from '../components/sidebar';
import './index.css';
import './styles/layout-override.css';

const bio = (
  <div style={{ flex: .66 }}>
    <Sidebar
      title="Hi, I'm Nathan &nbsp; 👋🏻"
      description={
        <>
          <img style={{ height: 190, width: 190, objectFit: "contain", borderRadius: 19, padding: 10, marginBottom: 0 }} src={`/images/profile-pic.png`} alt="profile-pic" />
          <div style={{ padding: "0 10px" }}>
            <p style={{ fontSize: 13 }}>I use this space for writing down things I want to remember for future reference.</p>
            <strong style={{ fontSize: 13 }}>Who am I?</strong>
            <p style={{ fontSize: 13 }}>From 9-5, I develop software but after hours I'm playing guitar, drums or keys as a DIY producer. I'm always learning about random things and some end up here.</p>
          </div>
        </>}
    />
  </div>
)

const Layout = ({ children }) => (
  <StaticQuery
    render={({ site: { siteMetadata: { title } } }) =>
      <>
        <Helmet
          htmlAttributes={{
            lang: 'en',
          }}
          title={title}
          meta={[
            { name: "google-site-verification", content: "5ZNFoMSu47B0gw6uoo6zFERaJU0fE6Sphks60z0AtYc" },
            { name: 'description', content: title },
            { name: 'keywords', content: 'software testing, software development, javascript, software engineer in test' },
          ]}
        />
        <Header />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 1500,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: '100%',
          }}
        >
          <Media query={{ maxWidth: 848 }}>
            {matches =>
              matches ? (
                <div
                  style={{
                    margin: '0 auto',
                    maxWidth: 980,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%',
                    padding: '0 25px',
                  }}
                >
                  <div style={{ flex: 1 }}>{children}</div>
                  {bio}
                </div>
              ) : (
                <div
                  style={{
                    margin: '0 auto',
                    maxWidth: 1500,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    height: '100%',
                    padding: '0 25px 75px 25px',
                  }}
                >
                  <div style={{ flex: 2.5, paddingRight: '30px' }}>
                    {children}
                  </div>
                  {bio}
                </div>
              )
            }
          </Media>
        </div>
      </>
    }
    query={
      graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              title
            }
          }
        }`
    }
  />
);

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
