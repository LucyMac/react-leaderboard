import React, { Component } from 'react';
import './style/App.css';
import EntryList from './components/EntryList'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: []
    }
}

  componentWillMount() {
      // Load json file and set it to the state
      fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
      .then((resp) => resp.json())
      .then((data) => {
          this.setState({data: data});
      });
  }

  componentDidMount() {
    this.sortByTotal();
  }

  sortByRecent() {
    // Fix this to expand selection. Currently sorting one column independently.
    this.state.data.sort((a, b) => a.recent > b.recent ? 1 : -1);
    console.log('sorting by recent')
  }

  sortByTotal() {
    // Fix this to expand selection. Currently sorting one column independently.
    this.state.data.sort((a, b) => a.alltime > b.alltime ? 1 : -1);
    console.log('sorting by total')
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
            <p className="leaderboard__recentPoints" onClick={this.sortByRecent.bind(this)}>Points in last 30 days</p>
            <p className="leaderboard__totalPoints" onClick={this.sortByTotal.bind(this)}>Total points</p>
          </div>
          <EntryList entries={this.state.data} />
        </section>
      </div>
    );
  }
}

export default App;
