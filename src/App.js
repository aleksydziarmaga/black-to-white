import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Board from './components/Board';
import BOARD from './models/board.model';
import changeTilesColor from './utils/changeTilesColor';
import createSteps from './utils/createSteps';
import createBoard from './utils/createBoard';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.onClick = this.onClick.bind(this)
  }

  onClick(x, y, board) {
    const newBoard = changeTilesColor(x, y, board);
    this.setState({ board: newBoard})
  }

  componentDidMount() {
    const cloneBoard = BOARD.map((e) => Object.assign({}, e))
    const newBoard = createBoard(cloneBoard, this.props.steps);
    this.setState({ board: newBoard})
  }

  render() {
    return (
      <div className="app"> 
        <h1>Black to White</h1>
        { this.state.board && <Board board={this.state.board} onClick={this.onClick} />}
      </div>
    )
  }
}
App.propTypes = {
  steps: PropTypes.array.isRequired
}
App.defaultProps = {
  steps: createSteps(BOARD)
}

export default App;
