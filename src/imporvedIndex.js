import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const playerOne = "O";
const playerTwo = "X";

function Board() {
  const [currentClickCount, setCurrentClickCount] = useState(0);
  const [array, _] = useState(Array(9).fill(null));

  const [currentPlayer, setCurrentPlayer] = useState(playerOne);

  const onSquareClickedHandler = (index) => {
    if (currentClickCount >= 9 || array[index] !== null) return;

    const newClickCount = currentClickCount + 1;
    setCurrentClickCount(newClickCount);

    if (newClickCount % 2 == 0) {
      array[index] = playerTwo;
      setCurrentPlayer(playerOne);
    } else {
      array[index] = playerOne;
      setCurrentPlayer(playerTwo);
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
