import GameBoard from "./GameBoard";
import Player from "./Player";
import { useState } from "react";
import Log from "./Log";

function App() {
  const [player, setPlayer] = useState("X");
  const [gameLog, setGameLog] = useState([]);

  function updateLog(subIndex, parentIndex) {
    setPlayer((oldSymbol) => (oldSymbol === "X" ? "0" : "X"));
    setGameLog((oldLog) => {
      let currentPlayer = "X"

      if(oldLog.length>0 && oldLog[0].player == 'X'){
        currentPlayer = '0'
      }
      const updated = [
        {
          gameboard: { row: parentIndex, col: subIndex },
          player: player,
        },
        ...oldLog,
      ];
      return updated;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="player 1" symbol="X" isActive={player === "X"}></Player>
          <Player name="player 2" symbol="0" isActive={player === "0"}></Player>
        </ol>
        <GameBoard
          gameData={gameLog}
          updateLog={updateLog}
        />
       
      </div>
       <Log id ="log" log={gameLog}/>
    </main>
  );
}

export default App;
