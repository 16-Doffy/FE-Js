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
         {winner && <div class="game-winner">
                Winner is {winner}
          </div>}
          <div class="button-ac">
          <button className='game-reset' onClick={handleResetGame}>Reset Game </button>
          <button className='game-resut' onClick={handleResetGame}>C</button>
        </div>
        </div>
    );
};

export default Game;