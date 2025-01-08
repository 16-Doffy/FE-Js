import React, { useState } from "react";
import Board from "./Board";
import "./GameStyle.css";
import { calwinner } from "../../helper";
const Game = () => {
  // const[board , setBoard] =useState(Array(9).fill(null));
  // const [xIsNext , setXIsNext] = useState(true);
  const [state, setState] = useState({
    board: Array(9).fill(null),
    xIsNext: true,
  });
  const winner = calwinner(state.board);
  const handleClick = (index) => {
    const boardCoppy = [...state.board];
    if (winner || boardCoppy[index]) return;
    boardCoppy[index] = state.xIsNext ? "X" : "O";
    setState({
        board:boardCoppy,
        xIsNext:!state.xIsNext,
        name:"doffy"
    })
    // setBoard(boardCoppy);
    // setXIsNext((xIsNext) => !xIsNext);
  };
  const handleResetGame = () => {
    // setBoard(Array(9).fill(null));
    // setXIsNext(true); // luôn là X đầu
  };
  return (
    <div>
      <Board cells={state.board} onClick={handleClick} />
      {winner && <div class="game-winner active">Winner is {winner}</div>}
      <div class="button-ac">
        <button className="game-reset" onClick={handleResetGame}>
          Reset Game{" "}
        </button>
        <button className="game-resut" onClick={handleResetGame}>
          Delete Turn
        </button>
      </div>
    </div>
  );
};

export default Game;
