var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess = 1;
var hits = 0;
var guesses = 0;

var isSunk = false;

// loop until our ship is sunk
while (isSunk == false) {
   console.log("not sunk");

   guess = prompt("Ready, aim, fire! (enter a number from 0-6):");

   // make sure it's a validate guess
   if (guess < 0 || guess > 6)  {
      // bad guess
      alert("Please enter a valid cell number!");
      console.log("not a valid guess");

   } else {
      guesses = guesses + 1;

      if (guess == location1 || guess == location2 || guess == location3) {
         alert("HIT!");
         hits = hits + 1;

         if (hits == 3) {
            isSunk = true;
            alert("You sank my battleship!");
         }
      } else {
         alert("MISS!");
      }
   }
}

var stats =   "It took you " + guesses + " guesses to sink my battleship, which means your shooting accuracy was " + (3/guesses);
alert(stats);
console.log(stats);