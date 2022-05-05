import React from 'react';
import MinAge from './dropdowns/Age.jsx';
import No_players from './dropdowns/No_players.jsx';
import SubmitButton from './SubmitButton.jsx';

function Home(props){

  return(
<>
    <MinAge handleChange={props.handleChange}/>
    <br />
    <br />
    <No_players handleChange={props.handleChange}/>
    <br />
    <br />
    <SubmitButton getGames={props.getGames}/>
</>
  );
}

export default Home;
