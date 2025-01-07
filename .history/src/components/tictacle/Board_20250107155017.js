import React from "react";
import Cell from "./Cell";
import { calwinner } from "../../helper";

const Board = () => {
  //Array(9).fill(0) -> [undefined] =9value
    const show = () => {
        const cells = [null, null, null, "X", "X", "X", null, null, null];
        console.log(calwinner(cells));
    }
  return (
    <div className="game-board">
      {Array(9)
        .fill()
        .map((item, index) => (
          <Cell key={index} />
        ))}
    </div>
  );
};

export default Board;
