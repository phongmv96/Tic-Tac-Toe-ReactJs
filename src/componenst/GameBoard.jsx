
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]
export default function GameBoard() {
  return <ol id="game-board">
    {initialGameBoard.map((row) => <li> key={}</li>)}
  </ol>
}
