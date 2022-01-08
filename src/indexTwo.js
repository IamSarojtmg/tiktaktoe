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

  // [x , n, n, n, n, n, n, n, n]

  const [currentPlayer, setCurrentPlayer] = useState(playerOne);

  // playerone "X"

  // index = 0
  const onSquareClickedHandler = (index) => {
    if (array[index] !== null) return; // This means that if the array(which is the index) is 0 which is the first click
    // is not equal to null than return the if statement.

    // array at 0 postion !=== null ?
    // x !== null
    // true --> return

    // do not continue

    // true
    if (currentPlayer === playerOne) {
      // array at postion 0  change to playerone "X"
      array[index] = playerOne;

      // change the cureent player to playe two "O"
      setCurrentPlayer(playerTwo);
    } else {
      array[index] = playerTwo;
      setCurrentPlayer(playerOne);
    }
  };

  const Square = (
    { index } // This is JSX syntax because both the pranathesis and curly bracket is being used.
  ) => (
    // onclick is a keyword which will run on mouse click. This will run the onSquareClickedHandler, the index is dynamic
    //and will show its value depending on which click the use is on.

    //array value will depend on what the current index is.

    // So what is going on down here is that lets say the user click on the square number 3 which will the array number 3.
    // Here the onSquareClickedHandler(index) will be onSquareClickedHandler(3) and the onSquareClickHandler function will
    //run. After the value is given the the index 3, it will fill out the array and square value with who ever the player is.

    <div className="square" onClick={() => onSquareClickedHandler(index)}>
      {/* <div className="square" onClick={() => onSquareClickedHandler(index)}>. Div means which ever square the user has
        selected to click on. Depending on which square the user clicked the div will make changes to it after it runs the
        onClick event handler. The JSX code should always be written before the DIV bracket closes.  */}

      {array[index]}
      {/* This will display the value stored in that index of the array.  */}
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
