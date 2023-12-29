const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUserNumberInput() {
  return parseInt(usrInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // from vendor file
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function add() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteOutput('+', initialResult, enteredNumber);
  writeToLog('ADD', initialResult, enteredNumber, currentResult);
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput('-', initialResult, enteredNumber);
  writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult);
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput('*', initialResult, enteredNumber);
  writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput('/', initialResult, enteredNumber);
  writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
}

function calculate(operation) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  console.log(operation);
  let opertator;
  if (operation === "ADD") {
    currentResult += enteredNumber;
    opertator = "+";
  } else if (operation === "SUBTRACT") {
    currentResult -= enteredNumber;
    opertator = "-";
  } else if (operation === "MULTIPLY") {
    currentResult *= enteredNumber;
    opertator = "*";
  } else if (operation === "DIVIDE") {
    currentResult /= enteredNumber;
    opertator = "/";
  }
  console.log(opertator);
  createAndWriteOutput(opertator, initialResult, enteredNumber);
  writeToLog(operation, initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', calculate.bind(this, "ADD"));
subtractBtn.addEventListener('click', calculate.bind(this, "SUBTRACT"));
multiplyBtn.addEventListener('click', calculate.bind(this, "MULTIPLY"));
divideBtn.addEventListener('click', calculate.bind(this, "DIVIDE"));
