import React from 'react'

function No_players(props){

  let playerRange = Array.from({length: 10}, (_, i) => i + 2)
  return(
    <>
      <select name="players" onChange={props.handleChange}>
      <option disabled selected>Minimum number of Players</option>
        {playerRange.map((player, index) => {
      return <option key={index} value={player}>{player}</option>
  })}
    </select>
    </>
  );
}

export default No_players;