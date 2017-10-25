$(document).ready(function() {

//These are the variables that will take elements from the document that need to be changed
				var wrapper = document.getElementById('tower');
				var span = wrapper.getElementsByTagName('span');
//This creates a variable that holds the element tags in an Array
				var tags = [];
//The loop that will place the correct id tag from the document to the Array 
			for (i = 0; i < span.length; i++) {
    			tags[i] = span[i].getElementsByTagName('u');
					}

//This is the random word generator
	document.getElementById("start-button").addEventListener("click", function(){
// Below is the list of words to be chosen
		var words = ["HOME", "WORLD", "STORE", "COMPUTER", "COMPLY", "ANTONYMS"];
// Random number generator that will correspond to a the index value of the Array "words"
		var computerGuess = words[Math.floor(Math.random()*words.length)];
//Bottom will log the Array into the consule
		console.log (computerGuess);
//creates a varaible to hold the computer's guess and turns it into an array
		var holder = computerGuess.split("");
//shoows the computer's guess on the console
		console.log(holder);
//The loop that will place the correct guess to the corresponding spot in the document
					value1 = 0;
				for (var i = 0; i < holder.length; i++) {
					if (holder[i].indexOf(value1) != -1){
//creates a variable that gets the elements from the document
						var valuePutter = document.getElementById(i);
//Puts the users correct guess to display on to the document
						valuePutter.innerHTML = holder[i];
//creates a variable of the users correct						
					}
	 			}
//Words for computer to choose from
		document.onkeyup = function() {
		var userGuess = String.fromCharCode(event.keyCode).
//Takes the user's guess and converts it to upper case charactors
			toUpperCase();
//Logs the guesses to console
			console.log (userGuess);
			var value2 = 0;
			var counter = 0;
					
//The loop that will place the correct guess to the corresponding spot in the document
		
				for (var i = 0; i < holder.length; i++) {
					if (holder[i].indexOf(userGuess) != -1){
//creates a variable that gets the elements from the document
						var putter = document.getElementById(i);
//Puts the users correct guess to display on to the document
						putter.innerHTML = holder[i];					
					}
	 			}
			}
	});

	//This is the random word generator
	document.getElementById("reset-button").addEventListener("click", function(){
//These are the variables that will take elements from the document that need to be changed
				var wrapper = document.getElementById('tower');
				var span = wrapper.getElementsByTagName('span');
//This creates a variable that holds the element tags in an Array
				var tags = [];
//The loop that will place the correct id tag from the document to the Array 
			for (i = 0; i < span.length; i++) {
    			tags[i] = span[i].getElementsByTagName('u');
					}
					console.log(tags);
		function isInArray(i,array) {
 		 return array.indexOf(value) > -1;
 		 console.log(value)
		}
	});

});