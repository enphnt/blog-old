import React from 'react';
import { StaticQuery, graphql } from "gatsby"
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Media from 'react-media';

import Header from '../components/header';
import Sidebar from '../components/sidebar';
import './styles/index.css';
import './styles/layout-override.css';
import * as styles from './styles/styles.module.css';

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
        <div>
          <Media query={{ maxWidth: 848 }}>
            {isSmallScreen =>
              isSmallScreen ? (
                <div className={styles.smallScreenContainer}>
                  <div className={styles.smallScreenContent}>
                    {children}
                  </div>
                  <Sidebar />
                </div>
              ) : (
                <div className={styles.largeScreenContainer} >
                  <div className={styles.largeScreenContent}>
                    {children}
                  </div>
                  <Sidebar />
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
