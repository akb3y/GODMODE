import React from 'react'

function SubmitButton(props){

  return(
    <>
  <button onClick={props.getGames}>Find My Game</button>
    </>
  );
}

export default SubmitButton;