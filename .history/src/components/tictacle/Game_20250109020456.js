import React, { useReducer, useState } from "react";
import Board from "./Board";
import "./GameStyle.css";
import { calwinner } from "../../helper";

//initialState = gtri khởi tao
const initialState = {
  board: Array(9).fill(null),
  xIsNext: true,
};
// immutable (ko thể chỉnh sửa)
// [...arr] {..obj}
// deep copy JSON.parse (JSON.stringfy(obj))
const gameReducer = (state, action) => {
  // switch (action.type) {
  //     case 'CLICK':

  //         break;

  //     default:
  //         break;
  // }
  switch (action.type) {
    case "CLICK":
      const { board, xIsNext } = state;
      const { index, winner } = action.payload;
      if (winner || board[index]) return;
      const nextState = JSON.parse(JSON.stringfy(state));

      return nextState;

    default:
      break;
  }
  return state;
};
const Game = () => {
  // const[board , setBoard] =useState(Array(9).fill(null));
  // const [xIsNext , setXIsNext] = useState(true);
  // use reducer
  //const [state ,dispatch] = useReducer(reducer , initialState);
  const [state, dispatch] = useReducer(gameReducer, initialState);
  // const action = {type: 'CLICK' , payload:{}}
  //const dispatch ({type:'CLICK'})
  //dispatch (action)
  //   const [state, setState] = useState({
  //     board: Array(9).fill(null),
  //     xIsNext: true,
  //     name:"doffy"
  //   });
  const winner = calwinner(state.board);
  const handleClick = (index) => {
    // const boardCoppy = [...state.board];
    // if (winner || boardCoppy[index]) return;
    dispatch({
      type: "CLICK",
      payload: {
        index,
        winner,
      },
    });
    // boardCoppy[index] = state.xIsNext ? "X" : "O";
    // setState({
    //     ...state,
    //     board:boardCoppy,
    //     xIsNext:!state.xIsNext,

    // });
    // console.log(state);
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
