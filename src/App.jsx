import Player from "./componenst/Player.jsx";

function App() {

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player
            symbol="X"
            name="Player 1"/>
          <Player
            symbol="O"
            name="Player 2"/>
        </ol>
        GAME BOARD
      </div>
      LOG
    </main>
  )
}

export default App
