import React from 'react';

const Header = () => (
  <div
    style={{
      background: '#f5f5f5',
      marginBottom: '3rem',
      borderBottom: '2px solid #e6e6e6',
    }}
  >
    <header id="home">

      <nav id="nav-wrap">

        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
        <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

        <ul id="nav" className="nav">
          <li className="current"><a href="https://enphnt.github.io">Home</a></li>
          <li><a href="https://enphnt.github.io/#about">About</a></li>
          <li><a href="https://enphnt.github.io/#resume">Resume</a></li>
          <li><a href="https://enphnt.github.io/#portfolio">Works</a></li>
          <li><a href="https://enphnt.github.io/#testimonials">Testimonials</a></li>
          <li><a href="#home">Blog</a></li>
          <li><a href="https://enphnt.github.io/#contact">Contact</a></li>
        </ul>

      </nav>

    </header>
  </div>
);

export default Header;
