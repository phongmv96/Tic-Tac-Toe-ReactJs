import {useState} from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]
export default function GameBoard({onSelectSquare, activePlayerSymbol}) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard)

  function handleChangeGameBoard(rowIndex, colIndex) {
    const newGameBoard = [...gameBoard].map((innerArray) => [...innerArray])
    newGameBoard[rowIndex][colIndex] = activePlayerSymbol
    setGameBoard(newGameBoard)
    onSelectSquare()
  }


  return <ol id="game-board">
    {gameBoard.map((row, rowIndex) =>
      <li key={rowIndex}>
        <ol>
          {row.map((playerSymbol, colIndex) => <li key={colIndex}>
            <button onClick={() => handleChangeGameBoard(rowIndex, colIndex)}>{playerSymbol}</button>
          </li>)}
        </ol>
      </li>)}
  </ol>
}
