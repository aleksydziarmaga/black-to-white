import React, { Component } from 'react';
import Board from './components/Board';

class App extends Component {
  render() {
    return (
      <div className="app"> 
        <h1>Black to White</h1>
        <Board />
      </div>
    )
  }
}

export default App;
