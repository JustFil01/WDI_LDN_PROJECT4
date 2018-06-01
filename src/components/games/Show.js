import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Auth from '../../lib/Auth';
import BoxCarousel from './Carousel';

//------------------------------------------------------------------------------
class GamesShow extends React.Component{
 state = {
   review: {}
 }
 //----------------------------------------------------------------------------
 componentDidMount() {
   axios.get(`/api/games/${this.props.match.params.id}`)
     .then(res => this.setState({ game: res.data }));
 }
 //----------------------------------------------------------------------------
 handleReviewDelete = review => {
   const { id }  = this.props.match.params;
   axios
     .delete(`/api/games/${id}/reviews/${review._id}`, {
       headers: { Authorization: `Bearer ${Auth.getToken()}`}
     })
     .then(res => this.props.history.push(`/games/${res.data._id}`));
 };
 //-----------------------------------------------------------------------------
 render() {
   const {game} = this.state;
   if(!game) return null;
   return (
     <div className="orangewrapper">
       <div className="columns is-multiline">
         {game.cover && <div className="column is-half">
           <div className="card-image2" style={{ backgroundImage:
              `url(${game.cover.url})`}}/>
         </div>}
         <div className="column is-half">
           <h1 className="title is-1">{game.name}</h1>
           <p>{game.summary}</p>
           <hr />
           <h4>Game Reviews</h4>
           <ul>
             {game.reviews.map(review =>
               <li key={review._id}>
                 <Link to={`/games/${game._id}/reviews/${review._id}`}>
                   <p className="title is-4">{review.title}|| submitted by<span className="title is-4">{review.postedBy.username}</span></p>
                   {Auth.isCurrentUser(review.postedBy) && <button
                     className="button is-danger"
                     onClick={() => this.handleReviewDelete(review)}
                   >Delete</button>}
                   <hr />
                 </Link>
               </li>
             )}
           </ul>
           {Auth.isAuthenticated() &&  <Link to={`/games/${game._id}/reviews`}
             className="button is-warning"
           >Add your own !</Link>}
           {!Auth.isAuthenticated() && <Link to="/register" className="button is-success">
             Want to add a review ? Register !</Link>}
         </div>
         <hr />
         <BoxCarousel
           game={game}
         />
       </div>
     </div>
   );
 }
}
//------------------------------------------------------------------------------
export default GamesShow;
