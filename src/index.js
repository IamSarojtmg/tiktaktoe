import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

// function Square() {
//   const [value, setValue] = useState(null);

//   return (
//     <button className="square" onClick={() => setValue("X")}>
//       {value}
//     </button>
//   );
// }


// Here we are creating a function component called Board and using the useState hook. Then we added a constant variable and inside it added a 
// [state and function].
function Board() {
  const [clickCount, setClickCount] = useState(0);

  // (Array(9).fill(null)) = The Arrya after useState is a complete different array than the one we created as a state. We know this
  // because it has a different colour and it is also a keyword. This will create a the 9 boxes that will go into our tik tak to. The fill
  //(null) will make sure all of the show blank on the screen
  const [array, _] = useState(Array(9).fill(null));

  // (index) = The value of index is the number that is written in onIncreaseClickHandler(0).
  const onIncreaseClickHandler = (index) => {
    // if the clickCount is less than 9 (true) and the array [index] is the position within the array. If there is nothing display null. 
    //===(confirmed value). LEARN ABOUT ARRAY IN DETAILS!!!
    if (clickCount < 9 && array[index] === null) {
      // Here we created a new const var called newCount and assigned it the clickCount +1.
      const newCount = clickCount + 1;

      setClickCount(newCount);

      // LEARN ABOUT REMAINDER OPERATOR. Here we are using the if funtion to make the computer understand to enter O 
      //when even and X when odd. For example if the number of click is 3 than the code will divide it by 2 (% 2) which which 
      //will give us a result of .something which means it is an odd number. if it does not return .anything than it is an even number.
      if (newCount % 2 == 0) {
        // alert("The number is even.");
        array[index] = "O";
      } else {
        // alert("the number is ODD");
        array[index] = "X";
      }
    }
  };

  return (
    <div>
      {/*
      className is the .css file and they are being imported from there.
       
       We entered the <div className="board-row"> because we are creating three lines of three squares. if we do not use it than there
        will be issue in the styling.

       className="square" = squares created in the code.
      */}
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

// class Board extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       squares: Array(9).fill(null),
//     };
//   }
//   renderSquare(i) {
//     return <Square value={i} />;
//   }

//   render() {
//     const status = "Next player: X";

//     return (
//       <div>
//         <div className="status">{status}</div>
//         <div className="board-row">
//           {this.renderSquare(0)}
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(3)}
//           {this.renderSquare(4)}
//           {this.renderSquare(5)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(6)}
//           {this.renderSquare(7)}
//           {this.renderSquare(8)}
//         </div>
//       </div>
//     );
//   }
// }

// ========================================

ReactDOM.render(<Board />, document.getElementById("root"));

// is the page the main page that is given to by the HTML. So basicallay one page of the website.
