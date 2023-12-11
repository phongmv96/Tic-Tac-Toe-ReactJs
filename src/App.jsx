import Player from "./componenst/Player.jsx";
import GameBoard from "./componenst/GameBoard.jsx";
import {useState} from "react";

function App() {
  const [activePlayer, setActivePlayer] = useState('X')
  const [gameTurn, setGameTurn] = useState([])

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X')
    setGameTurn((prev) => {
      let currentPlayer = 'X'
      if (prev.length && prev[0] === 'X') {
        currentPlayer = 'O'
      }
      return [{square: {rowIndex, colIndex}, player: currentPlayer}, ...prev]
    })
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
          onSelectSquare={handleSelectSquare}
          turns={gameTurn}
          activePlayerSymbol={activePlayer}/>
      </div>
      LOG
    </main>
  )
}

export default App
