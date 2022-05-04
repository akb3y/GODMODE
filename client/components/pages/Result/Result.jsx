import React from 'react'
import Game from './Game.jsx'

function Results(props){

  return(
    <>
{props.games.slice(0,20).map((game) => {
return <Game game={game} />

})}
    </>
  );
}

export default Results;