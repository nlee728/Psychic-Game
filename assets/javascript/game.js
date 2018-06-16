     // Creates an array that lists out all of the letter options.
     var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
     // Creating variables to hold the number of wins, losses, and ties. They start at 0.
     var wins = 0;
     var losses = 0;
     var guessesLeft = 10;
     var guessesSoFar = [];

    
     // This function is run whenever the user presses a key.
     document.onkeyup = function(event) {
      
      // Determines which key was pressed.
       var userGuess = event.key.toLowerCase();
       
       // Randomly chooses a letter from the options array. This is the Computer's guess.
       var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

       
         // If the user guesses the computer's letter, increment our wins variable.
         if (userGuess === computerGuess) {
           wins++;
           guessesLeft = 10;
           guessesSoFar = [];
           alert("Wow! You really must be psychic!");
         }
         // If the user guesses incorrectly, increment our losses variable.
         else {
           guessesLeft--;
           // Takes the user's response and pushes the variable to the end of the GuessesSoFar array.
          //  userGuess.append(guessesSoFar);
         }
          //When there are no more guesses left, alert the user that the game is over and reset.
         if (guessesLeft = 0) {
           losses++;
           guessesLeft = 10;
           guessesSoFar = [];
           alert("Perhaps you're not quite psychic...");
         }
         
         
         // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
         var html =
           "<p>Wins: " + wins + "</p>" +
           "<p>Losses: " + losses + "</p>" +
           "<p>Guesses Left: " + guessesLeft + "</p>";
           "<p>Guesses So Far: " + guessesSoFar + "</p>";
          
         // Set the inner HTML contents of the #game div to our html string
         document.querySelector("#game").innerHTML = html;
     };