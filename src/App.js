import React, { Component } from 'react';
import './style/App.css';
import EntryList from './components/EntryList'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: [],
        sortedByRecent: false
    }
}

  componentDidMount() {
    this.sortByTotal();
  }

  sortByRecent() {
    fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
    .then((resp) => resp.json())
    .then((data) => {
        this.setState({
          data: data,
          sortedByRecent: true
        });
    });
  }

  sortByTotal() {
    fetch('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
    .then((resp) => resp.json())
    .then((data) => {
        this.setState({
          data: data,
          sortedByRecent: false
        });
    });
  }

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
            <p className={"leaderboard__recentPoints " + (this.state.sortedByRecent ? 'underline' : '')}
               onClick={this.sortByRecent.bind(this)}>
                Points in last 30 days
            </p>
            <p className={"leaderboard__totalPoints " + (this.state.sortedByRecent ? '' : 'underline')}
               onClick={this.sortByTotal.bind(this)}>
                Total points
            </p>
          </div>
          <EntryList entries={this.state.data} />
        </section>
      </div>
    );
  }
}

export default App;
