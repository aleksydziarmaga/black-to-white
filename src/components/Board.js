import React, { Component } from 'react';
import Tile from './Tile';
import BOARD from '../models/board.model';

class Board extends Component {
    render() {
        return (
            <div className="board">
                {BOARD.map((tile) => <Tile tile={tile} key={`${tile.x}${tile.y}`}/>)}
            </div>
        )
    }
}

export default Board;