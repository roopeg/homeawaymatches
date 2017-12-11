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

function howManyHomeGames() { // checks the number of teams in both confs
  var A = makeArrayA().length;
  var B = makeArrayB().length;
  return A + B;
}

function evenOrNot(){
  var numberOfTeams = howManyHomeGames(); // howManyHomeGames gives numeric value
  return numberOfTeams % 2 == 0
}

$("#evenTest").click(function evenTest(){
  $('#output').text(evenOrNot());
});

var pairs = [];
