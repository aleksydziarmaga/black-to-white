import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Board from './components/Board';
import Button from './components/Button';

import BOARD from './models/board.model';
import changeTilesColor from './utils/changeTilesColor';
import createSteps from './utils/createSteps';
import createBoard from './utils/createBoard';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      solution: this.props.steps
    }
    this.updateSolution = this.updateSolution.bind(this);    
    this.onTileClick = this.onTileClick.bind(this);
    this.showSolution = this.showSolution.bind(this);
  }
  updateSolution(steps, index) {
    steps.push(index);
    this.setState({solution: steps})
  }
  onTileClick(x, y, board) {
    const index = board.findIndex((el) => (el.x === x && el.y === y))
    this.updateSolution(this.state.solution, index)

    const newBoard = changeTilesColor(x, y, board);
    if (newBoard[index].solution === true)
      newBoard[index].solution = false
    this.setState({ board: newBoard})
  }
  showSolution() {
    const solutionBoard = this.state.board;
    const solution = this.state.solution;
    for (let i = 0; i < solution.length; i++) {
      solutionBoard[solution[i]].solution = true;
    }
    this.setState({board: solutionBoard});
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
        { this.state.board && <Board board={this.state.board} onClick={this.onTileClick} />}
        <Button text="Solution" onClick={this.showSolution} />
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
