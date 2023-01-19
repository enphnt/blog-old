import React from 'react';
import Link from 'gatsby-link';

const Sidebar = props => (
  <div className="sidebar">
    <strong style={{ textAlign: "center" }}>{props.title}</strong>
    <img style={{ maxWidth: 190, borderRadius: 19, padding: 10, marginBottom: 0 }} src={`images/profile-pic.png`} />
    {props.description}
    <div>
    </div>
  </div>
);

export default Sidebar;
