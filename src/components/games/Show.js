import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Auth from '../../lib/Auth';
//------------------------------------------------------------------------------
class GamesShow extends React.Component{
 state = {
   review: {}
 }
 componentDidMount() {
   axios.get(`/api/games/${this.props.match.params.id}`)
     .then(res => this.setState({ game: res.data }));
 }
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
     <div className="leftcover">
       {game.cover && <div className="column">
         <div className="card-image2" style={{ backgroundImage:
            `url(${game.cover.url})`}}/>
       </div>}
       <div className="rightsummary">
         <h1 className="title is-1">{game.name}</h1>
         <p>{game.summary}</p>

         <ul>
           {game.reviews.map(review =>
             <li key={review._id}>
               <Link to={`/games/${game._id}/reviews/${review._id}`}>
                 <p className="title is-4">{review.title}</p>
                 <p className="title is-4">{review.subtitle}</p>
                 <p className="title is-4">{review.content}</p>
                 <p className="subtitle is-4">{review.postedBy.username}</p>
                 {Auth.isCurrentUser(review.postedBy) && <button
                   className="button is-danger"
                   onClick={() => this.handleReviewDelete(review)}
                 >Delete</button>}
                 <hr />
               </Link>
             </li>
           )}
         </ul>

         <div className="screenshot">
           {game.screenshots && game.screenshots.map(screenshot =>
             <div className="card" key={screenshot._id}>
               {screenshot.url && <div
                 className="card-image1"
                 style={{ backgroundImage: `url(${screenshot.url})` }}
               ></div>}
             </div>
           )}
         </div>
         <Link to={`/games/${game._id}/reviews`}
           className="button"
         >✚</Link>
       </div>
     </div>
   );
 }
}
//------------------------------------------------------------------------------
export default GamesShow;
// review edit but only on form , probably wanted to get to anothe form.
// handleChange =({target: { name,value }}) => {
//   const review = {...this.state.review, [name]: value};
//   this.setState({ review },() => {
//   });
// }


// class GameShow extends React.Component() {
//
//   componentWillMount(props) {
//     Game
//       .findById(req.params.id)
//       .then(game => {
//         if (!game) Game.create(props.data);
//       })
//   }
//
//   componentDidMount() {
//     axios.get('/api/games/:id')
//       .then(res => this.setState({ games: res.data }));
//   }
//
//   render() {
//     return (
//       <div>
//         <a>
//           <h1>{props.data.title}</h1>
//         </a>
//       </div>
//
//     )
//   }
//
// }
