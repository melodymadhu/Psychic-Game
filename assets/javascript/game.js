alert("documents state is " + document.readyState);

if (document.readyState === "loading") {		
//Declare all variables
var targetLetter = "";
var letterArray = new Array(26);
var randomIndex = 0;
var guessesLeft = 0;
var wins = 0;
var losses = 0;
var gamenbr = 0;
var nbrUnicode = 0;
var guessedLetters = "";
var guessedLetter = "";
var elemGuessesLeft = document.getElementById("guessesleft");
var elemGuessedLetters = document.getElementById("guessedletters");
var elemWins = document.getElementById("wins");
var elemLosses = document.getElementById("losses");
var i=0;

//Declare functions being used in the code
function gameStart() {
			
			gamenbr = gamenbr + 1;

			//alert("Psychic Game Nbr : " + gamenbr );			
			
			randomIndex = Math.floor(Math.random()*(26-1+1)+1);

			targetLetter = letterArray[randomIndex];

			//alert("target is " + targetLetter);
			
			guessesLeft = 9;

			guessedLetters = "";

			guessedLetter = "";

			elemGuessesLeft.innerHTML = "Guesses Left : " +  guessesLeft;

			elemGuessedLetters.innerHTML = "Your Guesses So Far : ";  

}

//Main Logic

		//alert("i am ready");
		// unicode for letter "a" is 97 and for letter z is 122. We can load the letter array manually
		// but being populated through the for loop by using the string.fromcharcode function
		
		for (nbrUnicode = 97; nbrUnicode <=122; nbrUnicode++) {
			letterArray[i] = String.fromCharCode(nbrUnicode);
			i++;
		}
		
		gameStart();

		document.onkeypress = function(event) {
		//	alert("ON KEY PRESS");
		//	alert("TEST " + event.which);
			//test if one of a...z is pressed by testing for the corresponding unicode
			if (event.which >=97 && event.which <=122) {
		//		alert("iam in a to z");
				guessedLetter = String.fromCharCode(event.which);
		//		alert("guessed letter is " + guessedLetter);
				
				//prepare the guesses so far string based on its current value ..for further display.
				if (guessedLetters === "") {
					guessedLetters = "Your Guesses So Far : " + guessedLetter;	
		//			alert("blank " + guessedLetters);
				} 
				else {
					guessedLetters = guessedLetters + ", " + guessedLetter;
		//			alert("guessedletters is " + guessedLetters);
				}

				elemGuessedLetters.innerHTML = guessedLetters;
				//check the typed letter against the target letter determined in gameStart function	
				if (guessedLetter === targetLetter) {
					wins++;	
					elemWins.innerHTML = "Wins : " + wins;
					setTimeout(gameStart(), 2000); 
				} else {
					guessesLeft--;
					elemGuessesLeft.innerHTML = "Guesses Left : " + guessesLeft;
					if (guessesLeft === 0) {
						losses++;
						elemLosses.innerHTML = "Losses : " + losses;
						setTimeout(gameStart(), 2000);
					}
				} 

			}
			else {
				alert("keypressed is : " + event.which);
				alert("Invalid Key - Only a ... z valid");
			} 
		}
};