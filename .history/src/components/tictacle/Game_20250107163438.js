import React, { useState } from 'react';
import Board from './Board';
import "./GameStyle.css";
import { calwinner } from '../../helper';
const Game = () => {
    const[board , setBoard] =useState(Array(9).fill(null));
    const [xIsNext , setXIsNext] = useState(true);
    const winner = calwinner(board);
    const handleClick = (index) => {
        const boardCoppy = [...board];
        if(winner || boardCoppy[index])
            return;
        boardCoppy[index] = xIsNext ? 'X' : 'O';
        
        setBoard(boardCoppy); 
        setXIsNext((xIsNext) => !xIsNext);
    };
    const handleResetGame = () => {
        setBoard(Array(9).fill(null));
        setXIsNext(true); // luôn là X đầu 
    }
    return (
        <div>
          <Board cells={board} onClick={handleClick}/> 
          <button onClick={handleResetGame}>Reset Game</button>
        </div>
    );
};

export default Game;