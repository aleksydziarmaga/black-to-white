import React from 'react';
import cn from 'classnames';

const Tile = ({tile, onClick, board}) => {
    const className = cn('tile', {fill: !tile.empty}, {'help-tile': tile.solution});
    return <div onClick={() => onClick(tile.x, tile.y, board)} className={className} />
};

export default Tile;