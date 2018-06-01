import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';
import Flash from '../../lib/Flash';
//------------------------------------------------------------------------------
class AuthRegister extends React.Component {
  state = {
    errors: {}
  };
  //----------------------------------------------------------------------------
  handleChange = ({ target: {name , value} }) => {
    this.setState({ [name]: value });
  }
  //----------------------------------------------------------------------------
  handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/register', this.state)
      .then( res => {
        Auth.setToken(res.data.token);
        Flash.setMessage('info', 'Welcome to Just Game, you can now add a review !');
      })
      .then(() => this.props.history.push('/games'))
      .catch(err => {
        this.setState({ errors: err.response.data.errors });
        this.props.history.replace('/register');
      });
  }
  //----------------------------------------------------------------------------
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="title">Username</label>
        <div className="field">
          <input
            className="input"
            name="username"
            placeholder="Username"
            onChange={this.handleChange}
          />
          {this.state.errors.username && <small>{this.state.errors.username}</small>}
        </div>
        <label htmlFor="title">Email</label>
        <div className="field">
          <input
            className="input"
            name="email"
            placeholder="Email"
            onChange={this.handleChange}
          />
          {this.state.errors.email && <small>{this.state.errors.email}</small>}
        </div>
        <label htmlFor="title">Password</label>
        <div className="field">
          <input
            type="password"
            className="input"
            name="password"
            placeholder="Password"
            onChange={this.handleChange}
          />
          {this.state.errors.password && <small>{this.state.errors.password}</small>}
        </div>
        <label htmlFor="title">Confirm Password</label>
        <div className="field">
          <input
            type="password"
            className="input"
            name="passwordConfirmation"
            placeholder="Please confirm password"
            onChange={this.handleChange}
          />
          {this.state.errors.passwordConfirmation && <small>{this.state.errors.passwordConfirmation}</small>}
        </div>
        <div className="field">
          <label htmlFor="title">Bio</label>
          <input
            type="bio"
            className="textarea"
            name="bio"
            placeholder="Description : Tell us a little about yourself"
            onChange={this.handleChange}
          />
          {this.state.errors.bio && <small>{this.state.errors.bio}</small>}
        </div>
        <label htmlFor="title">Profile Picture</label>
        <div className="field">
          <input
            type="profile"
            className="input"
            name="profile"
            placeholder="Profile picture"
            onChange={this.handleChange}
          />
          {this.state.errors.profile && <small>{this.state.errors.profile}</small>}
        </div>
        <button className="button is-primary">Submit</button>
      </form>
    );
  }
}
//------------------------------------------------------------------------------
export default AuthRegister;
