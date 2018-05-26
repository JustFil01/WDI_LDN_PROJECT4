import React from 'react';
import axios from 'axios';

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
       </div>
     </div>
   );
 }
}

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
