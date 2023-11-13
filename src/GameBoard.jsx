import React from "react";
import { useState } from "react";

const GameBoard = ({ gameData, updateLog, gameBoard }) => {
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
