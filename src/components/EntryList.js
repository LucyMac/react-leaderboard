import React, { Component } from 'react';
import '../style/App.css';

class EntryList extends Component {

  render() {
    const entry = this.props.entries.map((entry, i) => {
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
      <ul>{entry}</ul>
    );
  }
}

export default EntryList;
