import React, { useState } from 'react';
import Board from './Board';
import "./GameStyle.css";
import { calwinner } from '../../helper';
const Game = () => {
    const[board , setBoard] =useState(Array(9).fill(null));
    const [xIsNext , setXIsNext] = useState(true);
    const winner = calwinner(board);
    const handleClick = () => {

    };
    
    return (
        <div>
          <Board cells={board} onClick={handleClick}/> 
        </div>
    );
};

export default Game;