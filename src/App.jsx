import Player from "./componenst/Player.jsx";

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
        GAME BOARD
      </div>
      LOG
    </main>
  )
}

export default App
