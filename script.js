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
}
