import React from 'react';

// ex: const props = {
//     value: 'X', 
//     onClick:() => value
// }

const Cell = (props) => {
    //ob destructuring 
    const student = {
        name:'doffy',
        age:'23'
    };
    return (
        <div className="game-cell" 
            onClick={props.onClick}>
            {props.value} 
        </div>
    );
};

export default Cell;