import React, { useState } from 'react';
import Board from './Board';
import "./GameStyle.css";
const Game = () => {
    const[board , setBoard] =useState(Array(9).fill(null));
    const handleClick = () => {};
    const [xIsNext , setXIsNext] = useState(true);
    return (
        <div>
          <Board cells={board} onClick={handleClick}/> 
        </div>
    );
};

export default Game;