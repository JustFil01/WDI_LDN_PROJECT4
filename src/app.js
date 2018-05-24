import React from 'react';
import ReactDOM from 'react-dom';
import GamesIndex from './components/games/Index';

class App extends React.Component {
  render() {
    return (
      <main>
        <div className="header">
          <h1>Unamed</h1>
        </div>
        <GamesIndex />
      </main>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
