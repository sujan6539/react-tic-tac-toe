import React from "react";

const Log = ({ log, ...props }) => {
  let list = [];
  for (const element of log) {
    list = [
        ...list,
      <li key={`${element.gameboard.row},${element.gameboard.col}`} {...props}>
        Player {element.player} selected {element.gameboard.row},{" "}
        {element.gameboard.col}
      </li>,
    ];
  }

  return <ol>{list.map((element) => element)}</ol>;
};

export default Log;
