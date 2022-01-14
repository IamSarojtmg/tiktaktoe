import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const playerOne = "X";
const playerTwo = "O";

const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function Board() {
  const [array, setArray] = useState(Array(9).fill(null));

  const [gameOver, setGameover] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState(playerOne);
  const [winningIndexes, setWinningIndexes] = useState(Array(3).fill(null));

  useEffect(() => {
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (array[a] && array[a] === array[b] && array[a] === array[c]) {
        // (null && null) === (null && null) === null -> incorrect

        // (null && null === null) && (null === null) -> correct
        // false && true
        // FALSE
        alert([a, b, c]);
        setGameover(true);
        setWinningIndexes([a, b, c]);
      }
    }
  }, [array]);

  const onSquareClickedHandler = (index) => {
    if (array[index] !== null || gameOver) return;

    if (currentPlayer === playerOne) {
      const newArray = [...array];
      newArray[index] = playerOne;
      setArray(newArray);

      setCurrentPlayer(playerTwo);
    } else {
      const newArray = [...array];
      newArray[index] = playerTwo;
      setArray(newArray);

      setCurrentPlayer(playerOne);
    }
  };
  // the "square-x" : "square-o" is the same as if and else statement. the front one is if and the other one is else.
  // if : else
  const Square = ({ index }) => (
    <div
      className={`square ${
        array[index] === playerOne ? "square-x" : "square-o"
      } ${
        (index === winningIndexes[0] ||
          index === winningIndexes[1] ||
          index === winningIndexes[2]) &&
        "winning-square"
      }`}
      onClick={() => onSquareClickedHandler(index)}
    >
      {array[index]}
    </div>
  );

  // the constant variable is created here and we have added if statement logic inside it. This is a JSX.
  //
  const Status = () => {
    if (currentPlayer === playerOne) {
      return <div className="xStatus">X Turn</div>;
    } else {
      return <div className="yStatus">Y Turn</div>;
    }
  };

  // everything down here is being returned which is being displayed in the HTML page.
  return (
    <div>
      <Status />
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

// if (i === 0) {
//   console.log(`${array[a]} && ${array[a]}`, array[a] && array[a]); // x

//   console.log(
//     `${array[a]} && ${array[a]} === ${array[b]}`,
//     array[a] && array[a] === array[b]
//   ); // false

//   console.log(`${array[0]} === ${array[2]}`, array[0] === array[2]); // null
//   // x && null => null

//   console.log(
//     `${array[a]} && ${array[a]} === ${array[b]} && ${array[a]} === ${array[c]}`,
//     array[a] && array[a] === array[b] && array[a] === array[c]
//   ); // false
// }

// We are using concanitation. Classname = square css. Than we used the if and else statement
// If the index are the winning set index than add the winning-square classname.

// className = {
//   `square
//   ${array[index] === playerOne ? "square-x" : "square-o"}
//   ${(index === winningIndexes[0] || index === winningIndexes[1] || index === winningIndexes[2])
//   && "winning-square"
//   }`}

// class name square
// if x - square x else square y
//
