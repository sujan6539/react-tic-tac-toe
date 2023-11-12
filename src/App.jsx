import GameBoard from "./GameBoard";
import Player from "./Player";
import { useState } from "react";
import Log from "./Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./GameOver";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  const [player, setPlayer] = useState("X");
  const [gameLog, setGameLog] = useState([]);

    let gameBoard = [...initialGameBoard.map((innerarray)=>[...innerarray])]

    for (const element of gameLog){
        const {gameboard, player} = element
        const {row, col} = gameboard
        gameBoard[row][col] = player
    }
    const draw = gameLog.length === 9 
  let playerWon 
   for(const wincombs of WINNING_COMBINATIONS){
      const firstCombination = gameBoard[wincombs[0].row][wincombs[0].column]
      const secondCombination = gameBoard[wincombs[1].row][wincombs[1].column]
      const thirdCombination = gameBoard[wincombs[2].row][wincombs[2].column]
      if(firstCombination && firstCombination === secondCombination && firstCombination == thirdCombination){ 
        playerWon = firstCombination
        console.log(playerWon)
      }
    }

  function updateState(subIndex, parentIndex) {
    if (
      gameLog.find(
        (element) =>
          element.gameboard.row == parentIndex &&
          element.gameboard.col == subIndex
      )
    ) {
      return;
    }
    setPlayer((oldSymbol) => (oldSymbol === "X" ? "0" : "X"));
    setGameLog((oldLog) => {
      let currentPlayer = "X";

      if (oldLog.length > 0 && oldLog[0].player == "X") {
        currentPlayer = "0";
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

  function Restart(){
    setGameLog([])
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="player 1" symbol="X" isActive={player === "X"}></Player>
          <Player name="player 2" symbol="0" isActive={player === "0"}></Player>
        </ol>
        {(playerWon || draw) && <GameOver symbol={playerWon} rematch={()=>Restart()}/>}
        <GameBoard gameData={gameLog} updateLog={updateState} gameBoard={gameBoard}/>
      </div>
      <Log id="log" log={gameLog} />
    </main>
  );
}

export default App;
