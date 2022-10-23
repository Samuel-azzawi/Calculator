import "../App.css";
import Operations from "./Operations";
const Numbers = ({ setNum }) => {
  const handelNumbers = (event) => {
    let num = event.target.value;
    setNum((currentNum) => {
      if (num === "jinxed") {
        return "YOU GOT JINXED!"
      }
      if (/\./.test(num) && /\./.test(currentNum)) {
        let lastOperationIndex = 0;
        let position = currentNum.lastIndexOf("-");
        if (position > lastOperationIndex) {
          lastOperationIndex = position;
        }
        position = currentNum.lastIndexOf("+");
        if (position > lastOperationIndex) {
          lastOperationIndex = position;
        }
        position = currentNum.lastIndexOf("×");
        if (position > lastOperationIndex) {
          lastOperationIndex = position;
        }
        position = currentNum.lastIndexOf("÷");
        if (position > lastOperationIndex) {
          lastOperationIndex = position;
        }
        let elementsAfterLastOperation =
          currentNum.substring(lastOperationIndex);
        if (!/\./.test(elementsAfterLastOperation)) {
          return currentNum + num;
        }
        return currentNum;
      }
      if (currentNum === "0") {
        if (/0+/.test(num)) {
          return currentNum;
        }
        if (/\./.test(num)) {
          return currentNum + ".";
        }
        return num;
      } else {
        return currentNum + num;
      }
    });
  };
  return (
    <div className="calculator-keys">
      <Operations.Reset setNum={setNum} />
      <Operations.Del setNum={setNum} />
      <Operations.percentage setNum={setNum} />
      <Operations.Divide setNum={setNum} />
      <button
        value="7"
        onClick={(event) => {
          handelNumbers(event);
        }}
      >
        7
      </button>
      <button
        value="8"
        onClick={(event) => {
          handelNumbers(event);
        }}
      >
        8
      </button>
      <button
        value="9"
        onClick={(event) => {
          handelNumbers(event);
        }}
      >
        9
      </button>
      <Operations.Multiply setNum={setNum} />
      <button
        value="4"
        onClick={(event) => {
          handelNumbers(event);
        }}
      >
        4
      </button>
      <button
        value="5"
        onClick={(event) => {
          handelNumbers(event);
        }}
      >
        5
      </button>
      <button
        value="6"
        onClick={(event) => {
          handelNumbers(event);
        }}
      >
        6
      </button>
      <Operations.Minus setNum={setNum} />
      <button
        value="1"
        onClick={(event) => {
          handelNumbers(event);
        }}
      >
        1
      </button>
      <button
        value="2"
        onClick={(event) => {
          handelNumbers(event);
        }}
      >
        2
      </button>
      <button
        value="3"
        onClick={(event) => {
          handelNumbers(event);
        }}
      >
        3
      </button>
      <Operations.Plus setNum={setNum} />
      <button
        value="jinxed"
        onClick={(event) => {
          handelNumbers(event);
        }}
      >
        13
      </button>
      <button
        value="0"
        onClick={(event) => {
          handelNumbers(event);
        }}
      >
        0
      </button>
      <button
        value="."
        onClick={(event) => {
          handelNumbers(event);
        }}
      >
        .
      </button>
      <Operations.Equal setNum={setNum} />
    </div>
  );
};
export default Numbers;
