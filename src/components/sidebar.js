import React from 'react';

const Sidebar = props => (
  <div style={{ flex: .66 }}>
    <div className="sidebar">
      <strong style={{ textAlign: "center" }}>Hi, I'm Nathan &nbsp; 👋🏻</strong>
      <img
        style={{ height: 190, width: 190, objectFit: "contain", borderRadius: 19, padding: 10, marginBottom: 0 }}
        src={`images/profile-pic.png`}
        alt="profile-pic" />
      <p style={{ fontSize: 13 }}>
        From 9-5, I develop software, but after hours I'm playing the guitar and drums, or reading something new. I love to
        learn about random things, and some of the nuggets I discover end up here.
      </p>
    </div>
  </div>
);

export default Sidebar;
