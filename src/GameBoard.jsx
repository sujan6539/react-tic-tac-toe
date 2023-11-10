import React from "react";
import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = ({ gameData, updateLog}) => {
    let gameBoard = initialGameBoard

    for (const element of gameData){
        const {gameboard, player} = element
        const {row, col} = gameboard
        gameBoard[row][col] = player
    }

//   const [gameBoard, setState] = useState(gameState);

//   function updateState(subIndex, parentIndex, symbol) {
//     setState((oldState) => {
//       const updatedBoard = [...gameBoard.map((innerBoard) => [...innerBoard])];
//       if (updatedBoard[parentIndex][subIndex] == null) {
//         updatedBoard[parentIndex][subIndex] = symbol;
//         callback();
//       }

//       return updatedBoard;
//     });

//   }

  return (
    <div id="game-board">
      {gameBoard.map((item, index) => (
        <ol key={index}>
          {item.map((subitem, subindex) => (
            <li key={subindex}>
              <button onClick={() => updateLog(subindex, index)}>
                {gameBoard[index][subindex]}
              </button>
            </li>
          ))}
        </ol>
      ))}
    </div>
  );
};

export default GameBoard;
