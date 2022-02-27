$(document).ready(function(){

  $('ul.d1').mouseover(function(){
    $('ul.d2').slideDown();
  })

  $('ul.d1').mouseleave(function(){
    $('ul.d2').slideUp();
  })

})
