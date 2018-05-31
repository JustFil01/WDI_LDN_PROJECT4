import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';
import { Link } from 'react-router-dom';

//------------------------------------------------------------------------------
class UsersShow extends React.Component{
 state = {}
 componentDidMount() {
   axios.get(`/api/users/${this.props.match.params.id}`)
     .then(res => this.setState({ user: res.data }));
 }
 //-----------------------------------------------------------------------------
 render() {
   const {user} = this.state;
   if(!user) return null;
   return (
     <div className="columns">
       <div className="column">
         <h1 className="title is-1">{user.username}</h1>
       </div>
       <div className="column">
         <p className="title is-5">{user.bio}</p>
       </div>

       { Auth.isAuthenticated() && (Auth.getPayload().sub === user._id) && <p>
         <Link to={`/users/${user._id}/edit`}
           className="button"
         >Edit</Link>
       </p>}
     </div>
   );
 }
}
//------------------------------------------------------------------------------
export default UsersShow;
