import React from 'react';

// ex: const props = {
//     value: 'X', 
//     onClick:() => value
// }

const Cell = (props) => {
    return (
        <div className="game-cell" onClick={props.onClick}>
            {props.value} 
        </div>
    );
};

export default Cell;