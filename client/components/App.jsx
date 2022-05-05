import axios from 'axios';
import React from 'react';

import Details from './pages/Details/Details.jsx';
import Home from './pages/Home/Home.jsx';
import Results from './pages/Result/Results.jsx';

import Footer from './Footer.jsx';
import Header from './Header.jsx';


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            view: 'home',
            games: [],
            age: 18,
            players: 2,
            game: {},
        }
        this.handleChange = this.handleChange.bind(this);
        this.getGames = this.getGames.bind(this);
        this.handleGameClick = this.handleGameClick.bind(this);
        this.backClick = this.backClick.bind(this);
        this.headerClick = this.headerClick.bind(this);
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    getGames() {
        console.log('invoking getGames')
        axios
        .get(`/games?age=${this.state.age}&players=${this.state.players}`)
        .then((res) => this.setState({games: res.data, view: 'results'}))
        .catch((err) => console.error(err));
    }

    handleGameClick(index){
        this.setState({view: 'details', game: this.state.games[index]
        })
    }

    backClick(){
        if (this.state.view === 'details'){
            this.setState({view: 'results'})
        } else if(this.state.view === 'results'){
             this.setState({view: 'home', games: [], age: 18, players: 2, game: {}})
        }
    }

    headerClick(){
        this.setState({view: 'home', games: [], age: 18, players: 2, game: {}})
    }

    render() {
        const headerText = this.state.view === 'home' ? 'What game do you desire?' : this.state.view === 'results' ? 'Choose another game.' : 'Pick another game.';

        return (
          <div className='app-container'>

              <Header
                backClick={this.backClick}
                headerClick={this.headerClick}
                headerText={headerText}
                view={this.state.view}
              />

              <div className='page-container'>

                {this.state.view === 'home' && <Home handleChange={this.handleChange} getGames={this.getGames}/>}

                {this.state.view === 'results' && <Results games={this.state.games} handleGameClick={this.handleGameClick} />}

                {this.state.view === 'details' && <Details game={this.state.game}/>}
              </div>
              <br />
              <br />
              <Footer />
          </div>
        )
    }
}

export default App
