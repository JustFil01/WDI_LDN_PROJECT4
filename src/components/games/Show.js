import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
//------------------------------------------------------------------------------
class GamesShow extends React.Component{
 state = {
   review: {}
 }
 componentDidMount() {
   axios.get(`/api/games/${this.props.match.params.id}`)
     .then(res => this.setState({ game: res.data }));
 }
 //-----------------------------------------------------------------------------
 render() {
   const {game} = this.state;
   if(!game) return null;
   return (
     <div className="columns">
       <div className="column">
         <div className="card-image2" style={{ backgroundImage:
            `url(${game.cover.url})`}}/>
       </div>
       <div className="column">
         <h1 className="title is-1">{game.name}</h1>
         <p>{game.summary}</p>
         <ul>
           {game.reviews.map(review =>
             <li key={review._id}>
               <p className="title is-4">{review.title}</p>
               <p className="title is-4">{review.subtitle}</p>
               <p className="title is-4">{review.content}</p>
               {/* <p className="subtitle is-4">{review.createdBy.username}</p> */}
               <hr />
             </li>
           )}
         </ul>



         {game.screenshots && game.screenshots.map(screenshot =>
           <div className="card" key={screenshot._id}>
             {screenshot.url && <div
               className="card-image1"
               style={{ backgroundImage: `url(${screenshot.url})` }}
             ></div>}
           </div>
         )}
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
