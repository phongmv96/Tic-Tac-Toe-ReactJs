import {useState} from "react";

export default function Player({name, symbol}) {
  const [isEditing, setIsEditing] = useState(false)

  function handleButton() {
    setIsEditing((isEditing) => !isEditing)
  }


  let playerName = <span className="player-name">{name}</span>
  if (isEditing) {
    playerName = <input value={name} type="text" required/>

  }

  return <>
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleButton}>{isEditing ? 'Edit': 'Save'}</button>
      </span>
    </li>
  </>
}
