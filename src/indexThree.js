import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const playerOne = "X";
const playerTwo = "O";

function Board() {
  const [array, setArray] = useState(Array(9).fill(null));

  useEffect(() => {
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

    console.log("X" === null);
    // ++ operator is same as + 1 which we did before.

    // For keyword is used for LOOP. (LEARN IT!!). We gave the value of i to 0. Made the i smaller than lines.length
    // length is a keyword meaning run the i in loop with the number of lines you have on the array which is 8.
    // And on each loop add one in the i (i++). After each loop run the second array until all is done.
    // const [a, b, c] = lines[i] = If the line is line[2] then it will run   [6, 7, 8].

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      console.log(array[a] && array[a]); // x

      console.log(array[a] && array[a] === array[b]); // false

      console.log(array[0] === array[2]); // null
      // x && null => null
      console.log(array[a] && array[a] === array[b] && array[a] === array[c]); // false
      // The code below is used to make sure that when there is a null in array the game does not finish.
      if (array[a] && array[a] === array[b] && array[a] === array[c]) {
        // (null && null) === (null && null) === null (promise)
        // to caluclate this you firs need to find the result of (array[a] && array[a] and compare the result of that to
        //array[b] && array[a] than compare that result to === array[c]). Why because if you look close you will see
        //=== operator. && operator result e.g will be x && x = X. x===x result will be true.
        alert("game");
      }
    }
  }, [array]);

  const [currentPlayer, setCurrentPlayer] = useState(playerOne);

  const onSquareClickedHandler = (index) => {
    if (array[index] !== null) return;

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
