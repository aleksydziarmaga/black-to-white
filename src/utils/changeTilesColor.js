const changeTilesColor = (x, y, board) => {

    const iterator = board.entries();
    const tilesToChange = [];
    for(let e of iterator) {
        if (isAdjacent(e[1], x, y)) {
            tilesToChange.push(e[0]);
        }
    }
    for (let i of tilesToChange)  {
        if (board[i].empty) {
            board[i].empty = false
        }
        else {
            board[i].empty = true            
        }
    }
    return board
}

const isAdjacent = (el, x, y) => {
    if (el.x === x && el.y === y) {
        return true;
    }
    if (el.x === toLeft(x) && el.y === y) {        
        return true;
    }
    else if (el.x === toRight(x) && el.y === y)  {
        return true;
    }
    else if (el.x === x && el.y === toTop(y))  {         
        return true;
    }  
    else if (el.x === x && el.y === toBottom(y))  {       
        return true;
    }  
    return false;
}

function toLeft(x) {
    return --x
}
function toRight(x) {
    return ++x
}
function toTop(y) {
    return --y
}
function toBottom(y) {
    return ++y
}

export default changeTilesColor