import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
//------------------------------------------------------------------------------
class GamesIndex extends React.Component {
  state = {
    games: []
  }
  componentDidMount() {
    axios.get('/api/games')
      .then(res => this.setState({ games: res.data }));
  }
  //------------------------------------------------------------------------------
  render() {
    return (
      <div>
        {this.state.games && this.state.games.map(game =>
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
                    {game.screenshots && game.screenshots.map(screenshot =>
                      <div className="card" key={screenshot._id}>
                        {screenshot.url && <div
                          className="card-image1"
                          style={{ backgroundImage: `url(${screenshot.url})` }}
                        ></div>}
                      </div>
                    )}
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
