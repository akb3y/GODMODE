import React from 'react';
import Game from './Game.jsx';

function Results(props){

  if (props.games.length > 0) {
    return (
      <>
        {props.games.slice(0,20).map((game, index) => {
          return (
            <Game game={game} handleGameClick={() => props.handleGameClick(index)} />
          )
        })}
      </>
    );
  } else {
    return "No results found"
  }
}

export default Results;
