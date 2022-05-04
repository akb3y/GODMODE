import React from 'react'
import Home from './pages/Home/Home.jsx'
import Results from './pages/Result/Result.jsx'
import axios from 'axios'
import { IoIosArrowBack } from "react-icons/io";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            view: 'home',
            games: [],
            age: 18,
            players: 2,
        }
        this.handleChange = this.handleChange.bind(this);
        this.getGames = this.getGames.bind(this);
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

    render() {
        const headerText = this.state.view === 'home' ? 'What game do you desire' : this.state.view === 'results' ? 'Choose another game.' : 'Pick another game.';

        return (
            <div className='app-container'>
            <div className="header-container">
            <h1>GODMODE</h1>
            <h6> {this.state.view !== 'home' && <IoIosArrowBack />} {headerText}</h6>
            </div>
            <div className="page-container">
                {this.state.view === 'home' && <Home handleChange={this.handleChange} getGames={this.getGames}/>}
                {this.state.view === 'results' && <Results games={this.state.games} />}
                {this.state.view === 'details' && <Details />}
            </div>
            <div>
                <br /><br /><br />
                ©GODMODE
                <br />
                Powered by https://www.boardgameatlas.com/api/docs
            </div>
            </div>

        )
    }
}

export default App
