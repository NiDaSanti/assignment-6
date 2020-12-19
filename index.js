//------------------------ Question 1---------------------------
//Write a function that ask the user for two numbers and return the product of them. But the challenge here is that you can't use the operator * (you can't make the product)
//hint: multiplication is a sequence of sums
//@param {number} number1
//@param {number} number2
//@return {number} product

let num1 = parseInt(prompt("Please enter a positive, whole number: "));
let num2 = parseInt(prompt("Please enter another positive, whole number: "));
const multiplication = () => {
  let total = 0;

  for (i = 0; i < num2; i++) {
    total += num1;
  }
  console.log("total is: ", total);
  return total;
};

const answer1 = multiplication(num1, num2);
console.log("answer1", answer1);

const htmlTarget = document.getElementById("a-1");
htmlTarget.innerHTML = answer1;

//------------------------ Question 2 ---------------------------
// Write a function that recieves a string as a parameter and evaluate each character of the string to determinate if the character is vowel or a consonant. you have to store each character on separates arrays, one for vowels and the other one for consonants.
// after separating the characters concatenate both arrays. ask the user if wants the vowels first or consonants first in the final array.

//asking user to give us a string to assess
vowelOrConsonant = () => {
  let userInput = prompt("Please enter a string: ");
  let array = [];

  for (i = 0; i < userInput.length; i++) {
    let character = userInput.charAt(i);
    array.push(character);
  }

  let vowels = [];
  let consonants = [];

  for (i = 0; i < userInput.length; i++) {
    let characterToAssess = array[i];
    console.log("character working with: ", characterToAssess);
    //this if/else is assessing either vowels or consonants
    if (
      characterToAssess == "a" ||
      characterToAssess == "e" ||
      characterToAssess == "i" ||
      characterToAssess == "o" ||
      characterToAssess == "u"
    ) {
      vowels.push(characterToAssess);
    } else {
      consonants.push(characterToAssess);
    }
    console.log("Our final vowel array is: ");
    console.log("Our final constanant array is: ");
  }
  //asking user what they want first and allowing a reply
  let userRequest = prompt(
    "Do you want your vowels or consonants first?  Type 'vowels' for vowels first, or 'consonants' for consonants first."
  );
  let reply;

  //putting the vowels first or else, the consonants and returning what the user requested
  if (userRequest == "vowels") {
    reply = vowels.concat(consonants);
  } else {
    reply = consonants.concat(vowels);
  }
  return reply;
};

const answer2 = vowelOrConsonant();

const htmlTarget2 = document.getElementById("a-2");
htmlTarget2.innerHTML = answer2;

//------------------------ Question 3 ---------------------------
//Now let's create a small game. The game consists in a player (ask the user for the name).The player has 3 opportunities to guess a number. The number is a random number between 10 - 50.
//If the player don't find the number, the program must displays an alert and stop the game, but if the player finds the number, then the program must show a congratulations message (alert) with the name of the player in upperCase letters and stop the game
//You must have to store the player information in a 'player' object. The Player object contains the following Properties:
// {string} name, {number} lives, {numbers} fail_numbers[]
//where: name, saves the name of the player. Lives, represents the remaining oportunities each time the player fails. Fail_numbers, is an array of numbers that stores the fail numbers the player has used

//randomizer thing:  Math.floor(math.random() * 40) + 10;

//@return {string} win / gameOver => the string that says if the user wasted the three opportunities showing the fails numbers or the name if the player wins
const playerName = prompt("What is your name?");
console.log(playerName);

function smallGame() {
  const dealer = Math.floor(Math.random() * 40) + 10;
  console.log(dealer);

  for (i = 0; i < 3; i++) {
    var player = prompt("Please guess a number between 10 and 50");
    console.log(i);
    if (player == dealer) {
      return "Congrats!  You guessed correctly";
    } else if (player !== dealer) {
      return `No, the number was not ${player}.`;
    } else if (confirm("Try again, Ok or Cancel?")) {
      smallGame();
    } else {
      return "See you next time!";
    }
  }
}

const answer3 = smallGame();

const htmlTarget3 = document.getElementById("a-3");
htmlTarget3.innerHTML = answer3;

//------------------------ Question 4 ---------------------------
// In the function below we are giving you an array of objects, each one with the same properties. Ask to the user for 3 diferentes options to sorting the array from the highest to lowest. In the case of a string, the criteria to sort must be the length of the string. The first one is sorting the array of objects based on the title property.
// The second one sorting the array of objects based on the author property, the third one based on the library property. finally, the return value has to be the string sorted of the property selected separeted with a semicolon. Remember you have to sort all of the array based on the selected property
//example: if the user select sorting by title the return value must be: "Mockingjay: The Final Book of The Hunger Games; Walter Isaacson; The Road Ahead"

sort = () => {
  var library = [
    {
      title: "The Road Ahead",
      author: "Bill Gates",
      libraryID: 1254,
    },
    {
      title: "Walter Isaacson",
      author: "Steve Jobs",
      libraryID: 4264,
    },
    {
      title: "Mockingjay: The Final Book of The Hunger Games",
      author: "Suzanne Collins",
      libraryID: 3245,
    },
  ];

  let titleArray = [];
  let authorArray = [];
  let idArray = [];

  for (i = 0; i < library.length; i++) {
    let item = library[i].title;
    titleArray.push(item);
  }
  for (i = 0; i < library.length; i++) {
    let item = library[i].author;
    authorArray.push(item);
  }
  for (i = 0; i < library.length; i++) {
    let item = library[i].id;
    idArray.push(item);
  }

  let result = [];
  let userEntry = prompt(
    "How would you like your library sorted?  Please choose title, author, or libraryID?"
  );

  if (userEntry === "title") {
    result = titleArray.sort()
  } else if (userEntry === "author") {
    result = authorArray.sort()
  } else if (userEntry === "libraryID") {
    result = idArray.sort()
  }
  return result;
};

const answer4 = sort();
console.log(answer4);

const htmlTarget4 = document.getElementById("a-4");
htmlTarget4.innerHTML = answer4;