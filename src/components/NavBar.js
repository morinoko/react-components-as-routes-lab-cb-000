import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink
        to="/"
        exact
        activeStyle={{
          background: 'lightgray'
        }}
      >Home</NavLink>
      <NavLink
        to="/movies"
        exact
        activeStyle={{
          background: 'lightgray'
        }}
      >Movies</NavLink>
      <NavLink
        to="/directors"
        exact
        activeStyle={{
          background: 'ightgray'
        }}
      >Directors</NavLink>
      <NavLink
        to="/actors"
        exact
        activeStyle={{
          background: 'lightgray'
        }}
      >Actors</NavLink>
    </div>
  );
};

export default NavBar;
