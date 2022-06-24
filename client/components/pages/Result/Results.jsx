import React, {useState} from 'react';
import Game from './Game.jsx';

function Results(props){
const [results, setResults] = useState(20)
  if (props.games.length > 0) {
    return (
      <>
        {props.games.slice(0,results).map((game, index) => {
          return (
            <Game game={game} handleGameClick={() => props.handleGameClick(index)} />
          )
        })}
        <button onClick={() => setResults(results + 20)}>load more</button>
      </>
    );
  } else {
    return "No results found"
  }
}

export default Results;
