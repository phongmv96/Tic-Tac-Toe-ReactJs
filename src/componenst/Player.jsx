import {useState} from "react";

export default function Player({initName, symbol}) {
  const [playerName, setNamePlayerName] = useState(initName)
  const [isEditing, setIsEditing] = useState(false)

  function handleButton() {
    setIsEditing((isEditing) => !isEditing)
  }

  function handleChangeName(event) {
    setNamePlayerName(event.target.value)
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>
  if (isEditing) {
    editablePlayerName = <input required value={playerName} type="text" onChange={handleChangeName}/>

  }

  return <>
    <li>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleButton}>{isEditing ? 'Save': 'Edit'}</button>
      </span>
    </li>
  </>
}
