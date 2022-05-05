import React from 'react';

function Game(props){
return(
        <div className="game-container" onClick={props.handleGameClick}>
          <img className="images" src={props.game.images.small} />
          <div className="game-name">
            {props.game.name}
         </div>
        </div>
  );
}

export default Game;
