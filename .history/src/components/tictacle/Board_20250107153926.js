import React from 'react';
import Cell from './Cell';

const Board = () => { 
//Array(9).fill(0) -> [undefined] =9value
    

    return (
        <div className="game-board">
        (Array(9).fill().map((item, index) =>(
            <Cell key = {index} />
        ) ))

        </div>
    );
};

export default Board;