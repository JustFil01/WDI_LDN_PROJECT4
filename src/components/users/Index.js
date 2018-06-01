import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
//------------------------------------------------------------------------------
class UsersIndex extends React.Component {
  state = {
    users: []
  }
  //----------------------------------------------------------------------------
  componentDidMount() {
    axios.get('/api/users')
      .then(res => this.setState({ users: res.data }));
  }
  //----------------------------------------------------------------------------
  render() {
    return (
      <div>
        <div className="columns is-multiline">
          {this.state.users && this.state.users.map(user =>
            <div className="column" key={user._id}>
              <div className="card" >
                <Link to={`/users/${user._id}`}>
                  <div className="card-content userindex">
                    <div className="media">
                      <div className="media-content">
                        <p className="title is-3">{user.username}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
//------------------------------------------------------------------------------
export default UsersIndex;
