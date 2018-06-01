import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
//------------------------------------------------------------------------------
class ShowReview extends React.Component{
 state = {
   review: {}
 }
 //----------------------------------------------------------------------------
 componentDidMount() {
   const { id, reviewId } = this.props.match.params;
   axios.get(`/api/games/${id}/reviews/${reviewId}`)
     .then(res => this.setState({ review: res.data }, () => console.log(this.props))); // what should i put here ?
 }
 //-----------------------------------------------------------------------------
 render() {
   const url = (this.props.match.url.split('/'));
   const urlgame = url[2];
   const {review} = this.state;

   if(!review) return null;
   return (
     <div className="columns">
       <div className="orangewrapper">
         <div className="column">
           <img src={`${review.picture}`}/>
         </div>
         <div className="column">
           <h1 className="title is-1">{review.title}</h1>
           <h1 className="subtitle is-1">{review.subtitle}</h1>
           <p>{review.content}</p>
         </div>
         <Link to={`/games/${urlgame}`}
           className="button"
         >Back to the game</Link>
       </div>
     </div>
   );
 }
}
//------------------------------------------------------------------------------
export default ShowReview;
