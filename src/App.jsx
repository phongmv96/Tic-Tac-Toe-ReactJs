import Player from "./componenst/Player.jsx";
import GameBoard from "./componenst/GameBoard.jsx";
import {useState} from "react";

function App() {
  const [activePlayer, setActivePlayer] = useState('X')

  function handleSelectSquare() {
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X')
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
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
      </div>
      LOG
    </main>
  )
}

export default App
