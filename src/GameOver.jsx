import React from "react";

const GameOver = ({ symbol, rematch }) => {
  return (
    <span id="game-over">
      <h2>Game Over!</h2>
      {symbol ? <p>{symbol} WON!!</p> : <p>It's a draw!</p>}
      <button onClick={rematch}>Rematch!</button>
    </span>
  );
};

export default GameOver;
