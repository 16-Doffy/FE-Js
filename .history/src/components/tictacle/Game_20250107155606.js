import React, { useState } from 'react';
import Board from './Board';
import "./GameStyle.css";
const Game = () => {
    const[board , setBoard] =useState(Array(9).fill(null));
    return (
        <div>
          <Board /> 
        </div>
    );
};

export default Game;