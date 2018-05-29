import React from 'react';
import axios from 'axios';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import SortFilterBar from './SortFilterBar';
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
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  sortedFilteredGames = () => {
    const [field, dir] = this.state.sort.split('|');
    const re = new RegExp(this.state.search, 'i');
    const filtered = _.filter(this.state.games, game => {
      return re.test(game.name) ;
    });
    return _.orderBy(filtered, field, dir);
  }
  //------------------------------------------------------------------------------
  render() {
    return (
      <div>
        <SortFilterBar
          handleChange={this.handleChange}
          data={this.state}
          showMapView={this.showMapView}
          hideMapView={this.hideMapView}

        />
        {this.sortedFilteredGames().map(game =>
          <div className="card" key={game._id}>
            <Link to={`/games/${game._id}`}>
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
            </Link>
          </div>
        )}
      </div>
    );
  }
}
//------------------------------------------------------------------------------
export default GamesIndex;
