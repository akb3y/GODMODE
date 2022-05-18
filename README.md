<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#godmode">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## Godmode

A game recomendation app that allows the user to refine results based on parameters such as number of players and minimum age of players.  Filtered results are returned in order of highest rated game first.

![GODMODE VIDEO](/GODMODEVideo.mov)
<video src=GODMODEVideo.mov controls="controls" style="max-width: 730px;">
</video>

#### Filter Criteria

- Allows a user to filter results by desired age of players.
- Allows a user to filter results by desired number of players.

![Filter Criteria](/GODMODE-homepage.png "Filter Criteria Screenshot")

#### View Results

- Allows a user to view a list of the top 20 highest rated tabletop games based on their previously selected filter criteria.

![View Results](/GODMODE-results.png "View Results Screenshot")

#### Expand Game

- Allows a user to select a game in the results list to view detailed information about that game.

![Expand Game](/GODMODE-details.png "Expanded Game Screenshot")

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [React.js](https://reactjs.org/)
* [Express.js](https://expressjs.com/)
* [Mongoose](https://mongoosejs.com/docs/)
* [MongoDB](https://www.mongodb.com/docs/)
* [BoardGameAtlas API](https://www.boardgameatlas.com/api/docs)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get a free API Key at [BoardGameAtlas API](https://www.boardgameatlas.com/api/docs)
2. Clone the repo
   ```sh
   git clone https://github.com/akb3y/MVP.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Use `.env.example` to create your .env file
   ```js
   API_KEY = 'ENTER YOUR API';
   ```

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Alisha Barraw - [E-mail](mailto:alisha.barraw@gmail.com) | [LinkedIn](https://www.linkedin.com/in/alisha-barraw)

Project Link: [https://github.com/akb3y/godmode](https://github.com/akb3y/MVP)

<p align="right">(<a href="#top">back to top</a>)</p>
