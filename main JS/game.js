/*GAME:
STATE
-grid = empty
-playersArray
-activePlayersIndex
BEHAVIOUR
-play game
Set player colours, send prompt to first player. Start button/alert.
-Check Winner
See if four of the same colour are in grid in a vertical/horizontal/diagonal alignment.
Possibly need to do this for every section of grid to check for results
-Go to next player
If player hasn't won transfer to second player/other colour and start their turn.
GAME LOOP
-Player chooses slot position.
-Grid takes in slot position from player and chooses slot array based on this.
-Chosen slot array changes first empty hole in array to active players colour.
-Check for winner ^^
-Move to next player.*/

class Game {
  constructor(players) {
    //set up 6 x 7 array grid.
    this.connectFour = new Grid();
    //Creates players and assigns name, colour and id.
    this.players = [
      new Player(players[0].id, players[0].name, players[0].colour),
      new Player(players[1].id, players[1].name,  players[1].colour),
    ];
    //Helps switch between players.
    this.currentPlayerIndex = 0;
  }
  play(playerMove) {    
      //Gets the current players colour to pass down to setColour
      let colour = this.players[this.currentPlayerIndex].colour;
      //Change colour of span elements
      let chosenId = this.connectFour.grid[this.checksIfEmpty(playerMove)][playerMove].slotId;

      //Main game function to add a coloured piece when a column is selected.
      this.connectFour.grid[this.checksIfEmpty(playerMove)][playerMove].setColour(colour);
      //Set colour to player1 colour.
      // let slotElement = document.getElementById(`${chosenId}`);
      // slotElement.style.colour = this.players[this.currentPlayerIndex].colour;     //Check if gives back a colour, but need to sort out get player move above.
      // console.log(slotColour);
      
      console.log(this.connectFour.grid);
      //Switch to next player
      this.currentPlayerIndex++;
      if (this.currentPlayerIndex >= this.players.length) {
        this.currentPlayerIndex = 0;
      }
  }
  //Figure out next empty slot in the array for position.
  checksIfEmpty(column) {
    for (let i = this.connectFour.grid.length - 1; i >= 0; i--) {
      console.log(column);
      if (this.connectFour.grid[i][column].slotColour === "white") {
        console.log(i)
        return i;
      }
    }
  }
}
