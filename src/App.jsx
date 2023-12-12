import Player from "./componenst/Player.jsx";
import GameBoard from "./componenst/GameBoard.jsx";
import {useState} from "react";
import Log from "./componenst/Log.jsx";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

function App() {
  const [activePlayer, setActivePlayer] = useState('X')
  const [gameTurn, setGameTurn] = useState([])
  const [gameBoard, setGameBoard] = useState([...initialGameBoard.map(arr => [...arr])])

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X')
    setGameTurn((prev) => {
      let currentPlayer = 'X'
      if (prev.length && prev[0].player === 'X') {
        currentPlayer = 'O'
      }
      return [{square: {row: rowIndex, col: colIndex}, player: currentPlayer}, ...prev]
    })
  }

  function onRestartGameTurn() {
    setGameBoard(initialGameBoard)
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            isActive={activePlayer === 'X'}
            symbol="X"
            initName="Player 1"/>
          <Player
            isActive={activePlayer === 'O'}
            symbol="O"
            initName="Player 2"/>
        </ol>
        <GameBoard
          gameBoard={gameBoard}
          onRestartGameTurn={onRestartGameTurn}
          onSelectSquare={handleSelectSquare}
          turns={gameTurn}
          activePlayerSymbol={activePlayer}/>
      </div>
      <Log turns={gameTurn}/>
    </main>
  )
}

export default App
