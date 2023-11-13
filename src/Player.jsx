import React from "react";
import { useState } from "react";

const Player = ({ name, symbol, isActive, handleNameChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  const buttonText = isEditing ? "Save" : "Edit";

  function updateEditingState() {
    setIsEditing((oldEditingState) => !oldEditingState);
    if (isEditing) {
      console.log(`Editing complete ${symbol} : ${playerName}`)
      handleNameChange(symbol, playerName);
    }
  }
  function updateName(event) {
    setPlayerName(event.target.value);
  }

  return (
    <li id="players" className={isActive ? "active" : undefined}>
      {isEditing ? (
        <input type="text" defaultValue={name} onChange={updateName}></input>
      ) : (
        <span className="player-name"> {playerName}</span>
      )}
      <span className="player-symbol"> {symbol}</span>
      <button onClick={() => updateEditingState()}>{buttonText} </button>
    </li>
  );
};

export default Player;
