import React, { Component } from 'react';
import '../style/App.css';

class Entry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: []
    }
  }
  componentWillMount() {
    this.loadData();
  }
  loadData() {
    fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
    .then((resp) => resp.json())
    .then((data) => {
        this.setState({entries: data});
    });
  }

  render() {
    const entryList = this.state.entries.map((entry, i) => {
      return (
      <li key={i} className="leaderboard__entry">
        <p className="leaderboard__rank">{i +1}</p>
        <p className="leaderboard__name">{entry.username}</p>
        <p className="leaderboard__recentPoints">{entry.recent}</p>
        <p className="leaderboard__totalPoints">{entry.alltime}</p>
      </li>
      )
    });

    return (
      <ul>{entryList}</ul>
    );
  }
}

export default Entry;
