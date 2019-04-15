import React, { Component } from 'react';
import './Header.scss';
import { connect } from 'react-redux';
import { login } from '../../actions/authActions';

class Header extends Component {
  render() {
    const loginMenuItem = (
      <li className="nav-item">
        <a className="nav-link" href="#" onClick={this.props.login}>
          Login / Sign-up
        </a>
      </li>
    );

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
            {this.props.isLoggedIn ? null : loginMenuItem}
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

const mapStateToProps = state => ({
  isLoggedIn: state.authState.isLoggedIn
});

export default connect(
  mapStateToProps,
  { login }
)(Header);
