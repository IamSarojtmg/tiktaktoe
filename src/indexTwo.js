import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const playerOne = "X";
const playerTwo = "O";

// it is not required to track click counts in this case
// since we are checking if the clicked square is null
// and keeping track of who the active player is ie. X || O
function Board() {
  const [array, _] = useState(Array(9).fill(null));

  const [currentPlayer, setCurrentPlayer] = useState(playerOne);

  const onSquareClickedHandler = (index) => {
    if (array[index] !== null) return;

    if (currentPlayer === playerOne) {
      array[index] = playerOne;
      setCurrentPlayer(playerTwo);
    } else {
      array[index] = playerTwo;
      setCurrentPlayer(playerOne);
    }
  };

  const Square = ({ index }) => (
    <div className="square" onClick={() => onSquareClickedHandler(index)}>
      {array[index]}
    </div>
  );

  return (
    <div>
      <div className="status">{`It is player ${currentPlayer} turn`}</div>
      <div className="board-row">
        <Square index={0} />
        <Square index={1} />
        <Square index={2} />
      </div>

      <div className="board-row">
        <Square index={3} />
        <Square index={4} />
        <Square index={5} />
      </div>

      <div className="board-row">
        <Square index={6} />
        <Square index={7} />
        <Square index={8} />
      </div>
    </div>
  );
}

ReactDOM.render(<Board />, document.getElementById("root"));
