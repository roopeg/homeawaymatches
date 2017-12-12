    function makeArrayA() { // this creates array for conf A
    var arrayA = $('.confA').val().split('\n');
    return arrayA;
  }
    function makeArrayB() { // this creates array for conf B
    var arrayB = $('.confB').val().split('\n');

    return arrayB;
  }

$("#submit").click(function(){
  $('#output').text(makeArrayA()); // just a test to see if it works
});

function howManyTeams() { // checks the number of teams in both confs
  var A = makeArrayA().length;
  var B = makeArrayB().length;
  return A + B; // gives the number of teams combined a and b confs
}

function evenOrNot(){
  var numberOfTeams = howManyTeams(); // howManyTeams gives numeric value
  return numberOfTeams % 2 == 0
  // true if even, false if not even
}

$("#evenTest").click(function evenTest(){
  $('#output').text(evenOrNot());
});

function howManyHomeGames() {
  var teams = howManyTeams();

  if (evenOrNot() == true) {
    return teams / 4;
  }
}

$("#howManyHomeGames").click(function homeGamesTest(){
  $('#output').text(howManyHomeGames());
});

function randomlySelectTwo() {
  var arrayA = makeArrayA();
  var arrayB = makeArrayB();
  return  [
      arrayA[Math.floor(Math.random() * arrayA.length)],
      arrayB[Math.floor(Math.random() * arrayB.length)]
    ];
}

$("#randomPicksTest").click(function randomPicksTest(){
  $('#output').text(randomlySelectTwo());
});

/*
 array example:

 var pairs = [
  ["Aurinkolaulu", "Anaheim Mighty Ducks"],
  ["HC Puutarha", "PePo"],
  ["HC Arskalaulu", "Lighthouse X"],
]

*/

function thePairPusher() {

var pair = randomlySelectTwo(); // gives an array of two random teams
var theBigArray = []; // array where I want to push the pairs

  if (theBigArray.indexOf(pair) === -1) { // this lacks test for max number of home games
    theBigArray.push(pair) // if the pair doesnt exist already, push it to the end of array
    return theBigArray;
  } else {
    return false;
  }
}

$("#firstBigArrayTest").click(function firstBigArrayTest(){
  console.log(theIfThing());
});
