import React, { Component } from 'react';
import Board from './components/Board';
import BOARD from './models/board.model';
import changeTilesColor from './utils/changeTilesColor';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      board: BOARD,
    }
    this.onClick = this.onClick.bind(this)
  }

  onClick(x, y, board) {
    const newBoard = changeTilesColor(x, y, board);
    this.setState({ board: newBoard})
  }
  render() {
    return (
      <div className="app"> 
        <h1>Black to White</h1>
        <Board board={this.state.board} onClick={this.onClick} />
      </div>
    )
  }
}

export default App;
