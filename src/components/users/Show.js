import React from 'react';
import axios from 'axios';
//------------------------------------------------------------------------------
class UsersShow extends React.Component{
 state = {
   user: {}
 }
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
       </div>
       <h1 className="title is-1">{user.username}</h1>
     </div>
   );
 }
}
//------------------------------------------------------------------------------
export default UsersShow;
