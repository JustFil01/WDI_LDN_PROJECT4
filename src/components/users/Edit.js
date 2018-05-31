import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';
import UserForm from './UserForm';
import Flash from '../../lib/Flash';

class UsersEdit extends React.Component {
  state = {
    user: null,
    errors: {}
  };

  componentDidMount() {
    axios.get(`/api/users/${this.props.match.params.id}`)
      .then(res => this.setState({user: res.data}));
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const user = { ...this.state.user, [name]: value };
    const errors = { ...this.state.errors, [name]: '' };
    this.setState({ user, errors });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { id } = this.props.match.params;
    axios.put(`/api/users/${id}`, this.state.user, {
      headers: {Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(() => {
        Flash.setMessage('Account updated');
        this.props.history.push(`/users/${id}`);
      })
      .catch((err)=> {
        console.log(err.response.data.errors);
        this.setState({errors: err.response.data.errors});
        this.props.history.replace(`/users/${id}/edit`); // is replace the reason?
      });
  }

  handleDelete = () => {
    axios.delete(`/api/users/${this.props.match.params.id}`, {
      headers: {Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(Flash.setMessage('Thank you for using this website'))
      .then(this.handleLogout);
  }

  handleLogout = () => {
    Auth.logout();
    this.props.history.push('/');
  }


  render() {
    const {user} = this.state;

    if(!user) return null;
    return (
      <section>
        <UserForm
          user={user}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          errors={this.state.errors}
        />
        <div className='has-text-centered'>
          <button className="button" onClick= {this.handleDelete}>Remove account</button>
        </div>
      </section>
    );
  }
}


export default UsersEdit;
