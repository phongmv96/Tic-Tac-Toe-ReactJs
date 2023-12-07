import {useState} from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]
export default function GameBoard({symbol}) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard)

  function handleChangeGameBoard(rowIndex, colIndex, symbol) {
    const newGameBoard = [...gameBoard].map((innerArray) => [...innerArray])
    newGameBoard[rowIndex][colIndex] = symbol
    setGameBoard(newGameBoard)
  }

  return <ol id="game-board">
    {gameBoard.map((row, rowIndex) =>
      <li key={rowIndex}>
        <ol>
          {row.map((playerSymbol, colIndex) => <li key={colIndex}>
            <button onClick={() => handleChangeGameBoard(rowIndex, colIndex, symbol)}>{playerSymbol}</button>
          </li>)}
        </ol>
      </li>)}
  </ol>
}
