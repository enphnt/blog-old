import React from 'react';

const Sidebar = props => (
  <div className="sidebar">
    <strong style={{ textAlign: "center" }}>{props.title}</strong>
    {props.description}
    <div>
    </div>
  </div>
);

export default Sidebar;
