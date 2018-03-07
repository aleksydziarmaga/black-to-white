import React, { Component } from 'react';
import Tile from './Tile';

class Board extends Component {
    render() {
        const board = this.props.board;
        return (
            <div className="board">
                {board.map((tile) => 
                    < Tile tile={tile} key={`${tile.x}${tile.y}`} onClick={this.props.onClick} board={board}/> )}
            </div>
        )
    }
}

export default Board;