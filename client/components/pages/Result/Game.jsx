import React from 'react'

function Game({game}){
return(
        <div className="game-container">
          <span>
          <img src={game.images.small} />
          {game.name}
          </span>
        </div>
  );
}

export default Game;