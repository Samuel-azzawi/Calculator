const Operations = {
  Plus({ setNum }) {
    const handelOperations = () => {
      setNum((currentNum) => {
        if (!/[0-9]/.test(currentNum[currentNum.length - 1])) {
          return currentNum;
        }
        currentNum = currentNum + "+";
        return currentNum;
      });
    };
    return (
      <button
        onClick={() => {
          handelOperations();
        }}
      >
        +
      </button>
    );
  },
  Minus({ setNum }) {
    const handelOperations = () => {
      setNum((currentNum) => {
        if (!/[0-9]/.test(currentNum[currentNum.length - 1])) {
          return currentNum;
        }
        currentNum = currentNum + "-";
        return currentNum;
      });
    };
    return (
      <button
        onClick={() => {
          handelOperations();
        }}
      >
        -
      </button>
    );
  },
  Equal({ setNum }) {
    const handelOperation = () => {
      setNum((currentNum) => {
        if (!/[0-9]/.test(currentNum[currentNum.length - 1])) {
          return currentNum;
        }
        const chars = { "×": "*", "÷": "/" };
        let num = currentNum.replace(/[×÷]/g, (m) => chars[m]);
        console.log(num);
        return eval(num).toString();
      });
    };
    return (
      <button
        onClick={() => {
          handelOperation();
        }}
      >
        =
      </button>
    );
  },
  Multiply({ setNum }) {
    const handelOperations = () => {
      setNum((currentNum) => {
        if (!/[0-9]/.test(currentNum[currentNum.length - 1])) {
          return currentNum;
        }
        currentNum = currentNum + "×";
        return currentNum;
      });
    };
    return (
      <button
        onClick={() => {
          handelOperations();
        }}
      >
        ×
      </button>
    );
  },
  Divide({ setNum }) {
    const handelOperations = () => {
      setNum((currentNum) => {
        if (!/[0-9]|=/.test(currentNum[currentNum.length - 1])) {
          console.log(currentNum);
          return currentNum;
        }
        currentNum = currentNum + "÷";

        return currentNum;
      });
    };
    return (
      <button
        onClick={() => {
          handelOperations();
        }}
      >
        ÷
      </button>
    );
  },
  percentage({ setNum }) {
    const handelOperations = () => {
      setNum((currentNum) => {
        if (/[÷×+-]/.test(currentNum)) {
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
          let numbersAfterLastOperation = (
            +currentNum.substring(lastOperationIndex + 1) / 100
          ).toString();
          let numbersBeforeLastOperation = currentNum.substring(
            0,
            lastOperationIndex + 1
          );
          console.log(numbersBeforeLastOperation);
          console.log(typeof numbersAfterLastOperation);
          return numbersBeforeLastOperation + numbersAfterLastOperation;
        } else {
          return (+currentNum / 100).toString();
        }
      });
    };
    return (
      <button
        onClick={() => {
          handelOperations();
        }}
      >
        %
      </button>
    );
  },
  Del({ setNum }) {
    const handelOperations = () => {
      setNum((currentNum) => {
        if (currentNum.length > 1) {
          return currentNum.substring(0, currentNum.length - 1);
        }
        if (currentNum.length === 1) {
          return "0";
        }
      });
    };
    return (
      <button
        onClick={() => {
          handelOperations();
        }}
      >
        Del
      </button>
    );
  },
  Reset({ setNum }) {
    const handelOperations = () => {
      setNum((currentNum) => {
          return "0";
      });
    };
    return (
      <button
        onClick={() => {
          handelOperations();
        }}
      >
        C
      </button>
    );
  },
};

export default Operations;


