// Characters
/*
mrGreen
first_name:   Jacob
last_name:    Green
color:        green
description:  He has a lot of connections
age:          45
image:        https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg
occupation:   Entrepreneur

drOrchid
first_name:   Doctor
last_name:    Orchid
color:        white
description:  PhD in plant toxicology. Adopted daughter of Mr. Boddy
age:          26
image:        http://www.radiotimes.com/uploads/images/Original/111967.jpg
ocupation:   Scientist

profPlum
first_name:   Victor
last_name:    Plum
color:        purple
description:  Billionare video game designer
age:          22
image:        https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg
occupation:   Designer

missScarlet
first_name:   Kasandra
last_name:    Scarlet
color:        red
description:  She is an A-list movie star with a dark past
age:          31
image:        https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg
occupation:   Actor

mrsPeacock
first_name:   Eleanor
last_name:    Peacock
color:        blue
description:  She is from a wealthy family and uses her status and money to earn popularity
age:          36
image:        https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg
occupation:   Socialité

mrMustard
first_name:   Jack
last_name:    Mustard
color:        yellow
description:  He is a former football player who tries to get by on his former glory
age:          62
image:        https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg
occupation:   Retired Football player

// Weapons

name: rope        ---   weight: 10
name: knife       ---   weight: 8
name: candlestick ---   weight: 2
name: dumbbell    ---   weight: 30
name: poison      ---   weight: 2
name: axe         ---   weight: 15
name: bat         ---   weight: 13
name: trophy      ---   weight: 25
name: pistol      ---   weight: 20

// Rooms
name: Dinning Room
name: Conservatory
name: Kitchen
name: Study
name: Library
name: Billiard Room
name: Lounge
name: Ballroom
name: Hall
name: Spa
name: Living Room
name: Observatory
name: Theater
name: Guest House
name: Patio
*/

function Weapon(name, weight, game) {
  this.name = name;
  this.weight = weight;

  this.intoArr = function(obj) {
    game.weaponsArray.push(obj);
  };

  this.intoArr(this);
}

function Room(name) {
  this.name = name;
  this.intoArr = function(obj) {
    game.roomsArray.push(obj);
  };

  this.intoArr(this);
}

function Character(
  first_name,
  last_name,
  color,
  description,
  age,
  image,
  ocupation,
  game
) {
  this.first_name = first_name;
  this.last_name = last_name;
  this.color = color;
  this.description = description;
  this.age = age;
  this.image = image;
  this.ocupation = ocupation;

  this.intoArr = function(obj) {
    game.charactersArray.push(obj);
  };

  this.intoArr(this);
}

function Game() {
  this.charactersArray = [];
  this.roomsArray = [];
  this.weaponsArray = [];

  this.randomSelector = function(arr) {
    const randomNumber = Math.floor(Math.random() * arr.length);
    return arr[randomNumber];
  };

  this.pickMystery = function(arr1, arr2, arr3) {
    return {
      character: this.randomSelector(arr1),
      room: this.randomSelector(arr2),
      weapon: this.randomSelector(arr3)
    };
  };

  this.revealMystery = function(mystery) {
    return mystery;
    return `${mystery.character.first_name} ${
      mystery.character.last_name
    } killed Mr.Boddy using the ${mystery.weapon.name} in the ${
      mystery.room.name
    }!!!!`;
  };

  this.startGame = function() {
    return this.pickMystery(
      this.charactersArray,
      this.roomsArray,
      this.weaponsArray
    );
    // return this.revealMystery(mystery);
  };
}

const game = new Game();

//Weapons
const rope = new Weapon("rope", 10, game);
const knife = new Weapon("knife", 8, game);

//Rooms
const dinningRoom = new Room("Dinning Room", game);
const conservatory = new Room("Conservatory", game);

//Characters
const mrsPeacock = new Character(
  "Eleanor",
  "Peacock",
  "blue",
  "She is from a wealthy family and uses her status and money to earn popularity",
  36,
  "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  "Socialité",
  game
);

const missScarlet = new Character(
  "Kasandra",
  "Scarlet",
  "red",
  "She is an A-list movie star with a dark past",
  31,
  "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
  "Actor",
  game
);

const mrMustard = new Character(
  "Jack",
  "Mustard",
  "yellow",
  "He is a former football player who tries to get by on his former glory",
  62,
  "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
  "Retired Football player",
  game
);

const drOrchid = new Game(
  "Doctor",
  "Orchid",
  "white",
  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  26,
  "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  "Scientist",
  game
);

const charactersArray = [drOrchid, mrMustard];
const roomsArray = [dinningRoom, conservatory];
const weaponsArray = [rope, knife];

function randomSelector(arr) {
  const randomNumber = Math.floor(Math.random() * arr.length);
  return arr[randomNumber];
}

function pickMystery(arr1, arr2, arr3) {
  return {
    character: this.randomSelector(arr1),
    room: this.randomSelector(arr2),
    weapon: this.randomSelector(arr3)
  };
}

const btn = document.getElementById("start-btn");

// const header = document.getElementById("murderer"); //h1
// const image = document.getElementById("img");

const header = document.createElement("h1");
const image = document.createElement("img");
const body = document.getElementsByTagName("body")[0];

const input = document.getElementById("input");
console.log(input);
debugger;
btn.addEventListener("click", function() {
  //apply logic
  debugger;
  console.log(input.value);
  const mystery = pickMystery(charactersArray, roomsArray, weaponsArray);
  header.innerText = mystery.character.first_name;
  image.src = mystery.character.image;

  body.append(header);
  body.append(image);
});

function callBack() {
  //apply logic on click
}

function showMystery() {
  if (document.getElementsByTagName("img")[0]) {
    document.getElementsByTagName("img")[0].remove();
  }
  const img = document.createElement("img");
  const newGame = pickMystery(charactersArray, roomsArray, weaponsArray);
  const character = newGame.character;

  img.setAttribute("src", character.image);

  const parent = document.getElementsByTagName("body")[0];
  parent.append(img);
  game.startGame();
}
