import React from 'react';
import axios from 'axios';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import SortFilterBar from './SortFilterBar';
import SearchBar from './SearchBar';
//------------------------------------------------------------------------------
class GamesIndex extends React.Component {
  state = {
    games: [],
    search: '',
    sort: 'name|asc'
  }
  componentDidMount() {
    axios.get('/api/games')
      .then(res => this.setState({ games: res.data }));
  }
  //----------------------------------------------------------------------------
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }
  handleGameSearch = (search) => {
    axios.get('/api/getgame', {
      params: { search }
    })
      .then(res => {
        const games = res.data.map(game => {
          if(game.cover) game.cover.url = game.cover.url.replace('thumb', 'screenshot_med');

          if(game.screenshots) game.screenshots && game.screenshots.map(screenshot => {
            screenshot.url = screenshot.url.replace('thumb', 'screenshot_med');
            return screenshot;
          });

          return game;
        });
        this.setState({ games });
      });
    // need to change the res to have the modified url , replacing it .
  }

  debounced = _.debounce(this.handleGameSearch, 500);

  sortedFilteredGames = () => {
    const [field, dir] = this.state.sort.split('|');
    const re = new RegExp(this.state.search, 'i');
    const filtered = _.filter(this.state.games, game => {
      return re.test(game.name) ;
    });
    return _.orderBy(filtered, field, dir);
  }
  selectGame = (game) => {
    game.igdbId = game.igdbId || game.id;
    delete game.id;
    axios.post('/api/games', game)
      .then(res => this.props.history.push(`/games/${res.data._id}`));
  }
  //----------------------------------------------------------------------------
  render() {
    return (
      <div>
        <SortFilterBar
          handleChange={this.handleChange}
          data={this.state}
        />
        <SearchBar
          handleGameSearch={this.debounced}
        />
        {this.sortedFilteredGames().map(game =>
          <div className="card" key={game._id} onClick={() => this.selectGame(game)}>
            {game.cover && <div
              className="card-image"
              style={{ backgroundImage: `url(${game.cover.url})` }}
            ></div>}
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-4">{game.name}</p>
                  <p className="subtitle is-6">{game.summary}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
//------------------------------------------------------------------------------
export default GamesIndex;
