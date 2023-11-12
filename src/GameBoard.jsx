import React from "react";
import { useState } from "react";



const GameBoard = ({ gameData, updateLog, gameBoard}) => {

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
