import Player from "./componenst/Player.jsx";
import GameBoard from "./componenst/GameBoard.jsx";

function App() {

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player
            symbol="X"
            initName="Player 1"/>
          <Player
            symbol="O"
            initName="Player 2"/>
        </ol>
        <GameBoard/>
      </div>
      LOG
    </main>
  )
}

export default App
