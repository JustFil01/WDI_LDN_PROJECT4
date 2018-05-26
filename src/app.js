import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
//------------------------------------------------------------------------------
import Home from './components/Home';
import Navbar from './components/Navbar';
//------------------------------------------------------------------------------
import GamesIndex from './components/games/Index';
import AuthLogin from './components/auth/Login';
import AuthRegister from './components/auth/Register';
//------------------------------------------------------------------------------
import './scss/style.scss';
//------------------------------------------------------------------------------
class App extends React.Component {
  render() {
    return (
      <Router>
        <main>
          <Navbar />
          <section className="section">
            <div className="container">
              <Switch>
                {/* <Route path="/games/:id/edit" component={GamesEdit} />
                <Route path="/games/new" component={GamesNew} />
                <Route path="/games/:id" component={GamesShow} /> */}
                <Route path="/games" component={GamesIndex} />
                <Route path="/login" component={AuthLogin} />
                <Route path="/register" component={AuthRegister} />
                <Route exact path="/" component={Home} />
              </Switch>
            </div>
          </section>
        </main>
      </Router>
    );
  }
}
//------------------------------------------------------------------------------
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
