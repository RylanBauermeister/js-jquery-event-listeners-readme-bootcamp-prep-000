//define functions here

$(document).ready(function(){

  window.getIt = function(){
    $('p').on("click", function(){
      alert("Hey!");
    });
  }
  
  window.frameIt = function(){
    $('img').on("load", function(){
      $('img').addClass('tasty');
    });
  }

  window.pressIt = function(){
    $('#typing').on("keydown", function(key){
      if(key.which == "g"){
        alert("You pressed G!");
      }
    });
  }

});
