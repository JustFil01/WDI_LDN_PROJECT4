import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Auth from '../lib/Auth';
import Flash from '../lib/Flash';
//------------------------------------------------------------------------------
class Navbar extends React.Component {
  state = {
    navIsOpen: false
  }
  //----------------------------------------------------------------------------
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
    Flash.setMessage('info', 'Logged out - Thanks for coming !');
  }
  //----------------------------------------------------------------------------
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img src="https://www.brandcrowd.com/gallery/brands/pictures/picture13610300216785.jpg" width="210" heigh="190"/>
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
            {Auth.isAuthenticated() &&  <Link to="/users" className="navbar-item">Community</Link>}
            {Auth.isAuthenticated() && <a onClick={this.handleLogout} className="navbar-item">Logout</a>}
            {/* {Auth.isAuthenticated() &&  <Link to="/users/:id/edit" className="navbar-item">Settings</Link>} */}
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
