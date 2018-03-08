import changeTilesColor from './changeTilesColor';

const createBoard = (board, steps) => {
    let newBoard = board;
    for (let i = 0; i < steps.length; i++ ) {
        newBoard = changeTilesColor(board[steps[i]].x, board[steps[i]].y, newBoard)
    }
    return newBoard
}

export default createBoard;