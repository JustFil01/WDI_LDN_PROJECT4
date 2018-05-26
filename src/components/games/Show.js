//
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
