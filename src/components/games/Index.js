import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class GamesIndex extends React.Component {
  state = {
    games: []
  }
  componentDidMount() {
    axios.get('/api/games')
      .then(res => this.setState({ games: res.data }));
  }
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <Link to={`/games/${game._id}`}>
          <div className="card">
            <div
              className="card-image"
              style={{ backgroundImage: `url(${game.cover.url})` }}
            ></div>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-4">{game.name}</p>
                  <p className="subtitle is-6">{game.summary}</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default GamesIndex;
