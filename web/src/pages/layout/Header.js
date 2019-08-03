import React, { Component } from 'react';
import {Link, NavLink} from "react-router-dom";

class Header extends Component {
  render () {
    const { palette } = this.props;
    return (
      <div id="header" className="soft_shadow">
        <div className="wrap">
          <Link to="/palette/new" id="logo">
            <span style={{color: `rgb(${Math.floor(Math.random() * (+255 - +0)) + +0}, ${Math.floor(Math.random() * (+255 - +0)) + +0}, ${Math.floor(Math.random() * (+255 - +0)) + +0})`}}>l</span>
            <span style={{color: `rgb(${Math.floor(Math.random() * (+255 - +0)) + +0}, ${Math.floor(Math.random() * (+255 - +0)) + +0}, ${Math.floor(Math.random() * (+255 - +0)) + +0})`}}>l</span>
            <span style={{color: `rgb(${Math.floor(Math.random() * (+255 - +0)) + +0}, ${Math.floor(Math.random() * (+255 - +0)) + +0}, ${Math.floor(Math.random() * (+255 - +0)) + +0})`}}>l</span>
            <span style={{color: `rgb(${Math.floor(Math.random() * (+255 - +0)) + +0}, ${Math.floor(Math.random() * (+255 - +0)) + +0}, ${Math.floor(Math.random() * (+255 - +0)) + +0})`}}>l</span>
            <span> </span>
            The Palette
          </Link>
          <ol id="breadcrumbs">
            <li>
              <NavLink to="/palettes">Palettes</NavLink>
            </li>
            {
              palette != null ?
                (<li>
                  <NavLink to={`/palette/${palette.id}`}>Palette {palette.id}</NavLink>
                </li>)
                : ''
            }

          </ol>
        </div>
      </div>
    );
  }
}
export default Header;
