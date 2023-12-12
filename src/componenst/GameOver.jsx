export default function GameOver({winner, onRestartGameTurn}) {
  return <div id="game-over">
    <h2>Game Over!</h2>
    {winner && <p>{winner} won!</p>}
    <p>{!winner && <p>It's draw!</p>}</p>
    <p>
      <button onClick={onRestartGameTurn}>Rematch !</button>
    </p>
  </div>
}
