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
     <div className="card user">
       <div className="card-image">
         <figure className="image is-4by3">
           <img className="imguser" src={`${user.profile}`} alt="Picture of user"/>
         </figure>
       </div>
       <p className="title is-4">{user.username}</p>
       <div className="card-content">
         <div className="media">
           <div className="media-left">
           </div>
           <div className="media-content">

           </div>
         </div>
         <div className="content">
           {user.bio}
         </div>
         { Auth.isAuthenticated() && (Auth.getPayload().sub === user._id) && <p>
           <Link to={`/users/${user._id}/edit`}
             className="button"
           >Edit</Link>
         </p>}
       </div>
     </div>
   );
 }
}
//------------------------------------------------------------------------------
export default UsersShow;
