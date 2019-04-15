import React, { Component } from 'react';
import './Header.scss';

export default class Header extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <div className="logo">
            <span className="logo-big-text">eazy</span>
            <span className="logo-small-text">.my</span>
          </div>
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Categories
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Notification
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Login / Sign-up
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Help
              </a>
            </li>
          </ul>
          <div className="hamburger">
            <i className="material-icons">menu</i>
          </div>
        </header>
      </div>
    );
  }
}
