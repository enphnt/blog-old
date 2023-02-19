import React from 'react';

const Sidebar = props => (
  <div style={{ flex: .66 }}>
    <div className="sidebar">
      <strong style={{ textAlign: "center" }}>Hi, I'm Nathan &nbsp; 👋🏻</strong>
      <img style={{ height: 190, width: 190, objectFit: "contain", borderRadius: 19, padding: 10, marginBottom: 0 }} src={`images/profile-pic.png`} alt="profile-pic" />
      <div style={{ padding: "0 10px" }}>
        <p style={{ fontSize: 13 }}>I use this space for writing down things I want to remember for future reference.</p>
        <strong style={{ fontSize: 13 }}>Who am I?</strong>
        <p style={{ fontSize: 13 }}>From 9-5, I develop software but after hours I'm playing guitar, drums or keys as a DIY producer. I'm always learning about random things and some end up here.</p>
      </div>
    </div>
  </div>
);

export default Sidebar;
