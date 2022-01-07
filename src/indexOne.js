import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

// using setArray hooks instead of leaving _
function Board() {
  const [clickCount, setClickCount] = useState(0);

  // defining setArray instead
  const [array, setArray] = useState(Array(9).fill(null));

  const onIncreaseClickHandler = (index) => {
    if (clickCount < 9 && array[index] === null) {
      const newCount = clickCount + 1;

      setClickCount(newCount);

      if (newCount % 2 == 0) {
        // alert("The number is even.");
        // array[index] = "O";

        // using setArray hooks
        const newArray = [...array];
        newArray[index] = "O";
        setArray(newArray);
      } else {
        // alert("the number is ODD");
        // array[index] = "X";

        // using setArray hooks
        const newArray = [...array];
        newArray[index] = "X";
        setArray(newArray);
      }
    }
  };

  return (
    <div>
      <div className="status">STATUS</div>
      <div className="board-row">
        <div className="square" onClick={() => onIncreaseClickHandler(0)}>
          {array[0]}
        </div>
        <div className="square" onClick={() => onIncreaseClickHandler(1)}>
          {array[1]}
        </div>
        <div className="square" onClick={() => onIncreaseClickHandler(2)}>
          {array[2]}
        </div>
      </div>

      <div className="board-row">
        <div className="square" onClick={() => onIncreaseClickHandler(3)}>
          {array[3]}
        </div>
        <div className="square" onClick={() => onIncreaseClickHandler(4)}>
          {array[4]}
        </div>
        <div className="square" onClick={() => onIncreaseClickHandler(5)}>
          {array[5]}
        </div>
      </div>

      <div className="board-row">
        <div className="square" onClick={() => onIncreaseClickHandler(6)}>
          {array[6]}
        </div>
        <div className="square" onClick={() => onIncreaseClickHandler(7)}>
          {array[7]}
        </div>
        <div className="square" onClick={() => onIncreaseClickHandler(8)}>
          {array[8]}
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<Board />, document.getElementById("root"));
