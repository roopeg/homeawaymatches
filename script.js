    function makeArrayA() {
    var arrayA = $('.confA').val().split('\n');
    return arrayA;
  }
    function makeArrayB() {
    var arrayB = $('.confB').val().split('\n');

    return arrayB;
  }

$("#submit").click(function(){
  $('#output').text(makeArrayA());
});

function howManyHomeGames() {
  var A = makeArrayA().length;
  var B = makeArrayB().length;

}

