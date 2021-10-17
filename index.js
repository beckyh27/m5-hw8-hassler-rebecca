// Create an Array of at least 3 losing messages
var messages = [
    'sorry, you did not win', 
    'try again', 
    'better luck next time'
]

// Create variables to count wins and losses
var wins = 0
var losses = 0

// Create variables that target elements with the following IDs: 'message', 'wins', 'losses'
var messageEl = document.getElementById('message')
var winsEl = document.getElementById('wins')
var lossesEl = document.getElementById('losses')

// target all .box elements and attach a click event listener to each one using a loop
var boxElements = document.querySelectorAll('.box')

for (var i=0; i < boxElements.length; i++) {
    var boxElement = boxElements[i];

    // within each click event...
    // determine which box was clicked with 'this.textContent' or event.target.textContent
    // convert that value to a Number and store it to a variable
    boxElement.addEventListener("click", function(event) {
        var boxNumWasClicked = event.target.textContent
        var numWasClicked = (parseInt(boxNumWasClicked, 10))
        // console.log(numWasClicked)

        // create a random number between 1-3 and store it to a variable
        // This number will represent the winning box
        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }
        var randomNum = (getRandomInt(3));

        // determine if the box clicked is equal to the random number
        // if the numbers match, display a winning message by changing the text content of the div#message element
        var winCount = 0
        var lossCount = 0
        if (numWasClicked === randomNum) {
            messageEl.textContent = "You win"
            winCount++
            winsEl.textContent = "Wins: " + winCount            
        } else {
            messageEl.textContent = "You lose"
            lossCount++
            lossesEl.textContent = "Losses: " + lossCount
        }
      });
}








// if the numbers match, increment wins and display the win count in div#wins

// if the numbers don't match, change the div#message element's text to a random losing message from the array above
// if the numbers don't match, increment losses and display the loss count in div#losses