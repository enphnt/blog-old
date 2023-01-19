import React from 'react';
import Link from 'gatsby-link';

const Sidebar = props => (
  <div className="sidebar">
    <strong>{props.title}</strong> {props.description}
    <div>
    </div>
  </div>
);

export default Sidebar;
