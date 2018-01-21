import React, { Component } from 'react';
import logo from './style/logo.svg';
import './style/App.css';
import Entry from './components/entry'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Leaderboard</h1>
          These are the top users of FreeCodeCamp
        </header>
        <section className="leaderboard">
          <div className="leaderboard__header">
            <p className="leaderboard__rank">Rank</p>
            <p className="leaderboard__name">Name</p>
            <p className="leaderboard__recentPoints">Points in last 30 days</p>
            <p className="leaderboard__totalPoints">Total points</p>
          </div>
          <Entry />
        </section>
      </div>
    );
  }
}

export default App;
