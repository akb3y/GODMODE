import React from 'react';
import { BsSuitHeartFill, BsSuitHeart } from 'react-icons/bs';
import axios from 'axios'

class Favorite extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      favorited: false,
    }

    this.handleFavorited = this.handleFavorited.bind(this);
  }

  handleFavorited() {
    const updatedValue = this.props.game.favorite === true ? false : true;
console.log(updatedValue)
    axios.put(`/favorite/?id=${this.props.game._id}` ,
    {favorite: updatedValue})
    .then(() => this.setState({
      favorited: !this.state.favorited,
    }))
    .then(() => {
      const updatedGame = {
        ...this.props.game,
        favorite: this.state.favorited,
      }
      this.props.setGame(updatedGame)
    })
    .catch((err) => console.error(err));
  };

  render() {
    if (this.state.favorited === true || this.props.game.favorite === true) {
      return (<span onClick={this.handleFavorited}><BsSuitHeartFill /></span>)
    } else {
      return (<span onClick={this.handleFavorited}><BsSuitHeart /></span>)
    }
  }
};

export default Favorite;