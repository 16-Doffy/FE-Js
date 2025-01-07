import React, { useState } from 'react';
import "./GameStyle.css";
import Cell from './Cell';
const Game = () => {
    const[board , setBoard] =useState(Array(9).fill(null));
    return (
        <div>
          <Cell cells={board} value={item} onc/> 
        </div>
    );
};

export default Game;