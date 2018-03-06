import React from 'react';
import cn from 'classnames';

const Tile = ({tile}) => {
    const className = cn('tile', {fill: !tile.empty});
    return <div className={className} />
};

export default Tile;