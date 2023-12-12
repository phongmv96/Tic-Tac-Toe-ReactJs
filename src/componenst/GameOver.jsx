export default function GameOver({winner, hasDraw}) {
  return <div id="game-over">
    <h2>Game Over!</h2>
    {winner && <p>{winner} won!</p>}
    <p>{!winner && <p>It's draw!</p>}</p>
    <p>
      <button>Rematch !</button>
    </p>
  </div>
}
