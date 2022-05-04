import React from 'react'
import MinAge from './dropdowns/Age.jsx'
import No_players from './dropdowns/No_players.jsx'
import SubmitButton from './SubmitButton.jsx'

function Home(props){

  return(
    <div>
<MinAge handleChange={props.handleChange}/>
<No_players handleChange={props.handleChange}/>
<br />
<SubmitButton getGames={props.getGames}/>
</div>
  );
}

export default Home;