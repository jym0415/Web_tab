
$(document).ready(function(){

  var px = $("#slider").height() //1200px 위로갈땐 height 좌우 width
  var dir = -1; //방향 - 오른쪽방향일땐 1

  //json 포멧에서는 key는 절대 변수로 사용불가

  // $('#slider ul').animate({ "marginLeft" : px*dir }, 400, function(){
  // 먼저 검수하기!

  setInterval(function(){
    $('#slider ul').animate({ "marginTop" : px*dir }, 400, function(){
      $(this).find("li").eq(0).appendTo($(this));
      $(this).css("margin-Top",0); //위로올라갈땐 margin-Top 좌우margin-left
    });
  },3000);

})