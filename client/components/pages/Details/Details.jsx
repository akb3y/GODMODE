import React from 'react';
import BulletList from '../../BulletList.jsx';
import BuyNow from '../../BuyNow.jsx';
import Divider from '../../Divider.jsx';

function Details({game}){

  const summaryDetails =  [
    <span><u># Players</u>: {' '} {game.players}</span>,
    <span><u>Avg Time</u>: {' '} {game.playtime}</span>,
    <span><u>For Ages</u>: {' '} {game.min_age}+</span>,
  ];

  const purchaseDetails = [
    <span><u>Rating</u>: {' '} {parseFloat(game.average_user_rating).toFixed(2) } / 5</span>,
    <span><u>Price</u>: {' '} {game.price_text}</span>,
  ];

  return(
      <>
          <Divider />
          <div className="game1-name">
            {game.name}
          </div>
          <Divider />
          <br />
          <br />
          <img className="large-img" src={game.images.small} />
          <BuyNow />
          <span className="summary-details">
              <BulletList items={summaryDetails}/>
              <BulletList items={purchaseDetails}/>
          </span>
          <br />
          <Divider />
          <br />
          <div className="description">
            {game.description_preview}
          </div>
          <br />
          <Divider />
      </>
    );
  }

  export default Details;
  