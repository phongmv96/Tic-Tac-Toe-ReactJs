import {WINNING_COMBINATIONS} from "../wining-combination.js";
import GameOver from "./GameOver.jsx";


export default function GameBoard({onSelectSquare, activePlayerSymbol, turns, onRestartGameTurn, gameBoard}) {
  console.log(turns)
  for (const turn of turns) {
    const {square, player} = turn
    const {row, col} = square
    gameBoard[row][col] = player
  }

  let winner = null
  let hasDraw = null

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column]
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column]
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column]
    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
      winner = firstSquareSymbol
    }
  }

  hasDraw = !winner && turns.length === 9

  function handleChangeGameBoard(rowIndex, colIndex) {
    const newGameBoard = [...gameBoard].map((innerArray) => [...innerArray])
    newGameBoard[rowIndex][colIndex] = activePlayerSymbol
    onSelectSquare(rowIndex, colIndex)
  }


  return <ol id="game-board">
    {(winner || hasDraw) && <GameOver onRestartGameTurn={onRestartGameTurn} winner={winner}/>}
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
