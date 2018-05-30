import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Auth from '../lib/Auth';
//------------------------------------------------------------------------------
class Navbar extends React.Component {
  state = {
    navIsOpen: false
  }
  handleToggle = () => {
    this.setState({ navIsOpen: !this.state.navIsOpen });
  }
  //----------------------------------------------------------------------------
  componentWillUpdate() {
    this.state.navIsOpen && this.setState({ navIsOpen: false });
  }
  //----------------------------------------------------------------------------
  handleLogout = () => {
    Auth.logout();
    this.props.history.push('/');
  }
  //----------------------------------------------------------------------------
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img src="https://i.imgur.com/ZbZZTye.png?1" width="112" />
          </Link>
          <a role="button" className={`navbar-game ${this.state.navIsOpen? 'is-active' : ''}`} onClick={this.handleToggle}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className={`navbar-menu ${this.state.navIsOpen ? 'is-active' : ''}`}>
          <div className="navbar-end">
            <Link to="/games" className="navbar-item">Game List</Link>
            {/* <Link to="/games/new/reviews" className="navbar-item">Add a review</Link> */}
            {Auth.isAuthenticated() &&  <Link to="/users" className="navbar-item">Community</Link>}
            {Auth.isAuthenticated() && <a onClick={this.handleLogout} className="navbar-item">Logout</a>}
            {!Auth.isAuthenticated() && <Link to="/register" className="navbar-item">Register</Link>}
            {!Auth.isAuthenticated() && <Link to="/login" className="navbar-item">Login</Link>}
          </div>
        </div>
      </nav>
    );
  }
}
//------------------------------------------------------------------------------
export default withRouter(Navbar);
