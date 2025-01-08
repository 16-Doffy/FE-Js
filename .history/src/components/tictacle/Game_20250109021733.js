import React, { useReducer, useState } from "react";
import Board from "./Board";
import "./GameStyle.css";
import { calwinner } from "../../helper";

const initialState = {
  board: Array(9).fill(null),
  xIsNext: true,
};
const gameReducer = (state, action) => {
  switch (action.type) {
    case "CLICK": {
      const { board, xIsNext } = state;
      const { index, winner } = action.payload;
      if (winner || board[index]) return state;
      const nextState = JSON.parse(JSON.stringify(state));

      //   board[index] = state.xIsNext ? "X" : "O";
      nextState.board[index] = xIsNext ? "X" : "O";
      nextState.xIsNext = !xIsNext;
      return nextState;
    }
    case "RESET": {
      const nextState = JSON.parse(JSON.stringify(state));
      
      nextState.board = Array(9).fill(null);
      nextState.xIsNext = true;
      return nextState;
    }
    default:
        console.log("Error")
      break;
  }
  return state;
};
const Game = () => {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  const winner = calwinner(state.board);
  const handleClick = (index) => {
    dispatch({
      type: "CLICK",
      payload: {
        index,
        winner,
      },
    });
  };
  const handleResetGame = () => {
    dispatch({
      type: "RESET",
    });
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
