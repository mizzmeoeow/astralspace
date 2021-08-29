import React, { useState } from "react";

export default function ProfileNavbar(props) {
  const user = props.user;

  return (
    <div className="navbar profile-nav">
      {user ? (
        <img className="topImg" src={user.profilePic} alt="" />
      ) : (
        <h1>not set up for some reason</h1>
      )}
      <a href="/connect" className="navbar-links profile-links">
        Connect
      </a>
    </div>
  );
}
