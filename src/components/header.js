import React from 'react';
import { appBanner } from './styles/styles.module.css';

const Header = () => (
  <div className={appBanner}>
    <header id="home">

      <nav id="nav-wrap">

        <a className="mobileButton" href="#nav-wrap" title="Show navigation">Show navigation</a>
        <a className="mobileButton" href="#home" title="Hide navigation">Hide navigation</a>

        <ul id="nav" className="nav">
          <li><a href="https://enphnt.github.io">Home</a></li>
          <li><a href="https://enphnt.github.io/#about">About</a></li>
          <li><a href="https://enphnt.github.io/#resume">Resume</a></li>
          <li><a href="https://enphnt.github.io/#portfolio">Works</a></li>
          <li><a href="https://enphnt.github.io/#testimonials">Testimonials</a></li>
          <li className="current"><a href="https://enphnt.github.io/blog">Blog</a></li>
          <li><a href="https://enphnt.github.io/#contact">Contact</a></li>
        </ul>

      </nav>

    </header>
  </div>
);

export default Header;
