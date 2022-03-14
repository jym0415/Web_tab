$(document).ready(function(){
    var count = 0;
    var classNm = "show"
    var total = $("#slider li").length; //$("#slider li").size()
    setInterval(function(){
      count++
      count %= total //나머지식 total(3) 로 나눴을때 나머지 정수 (0,1,2)

    //   $("#slider li").removeClass(classNm); siblings안쓸때 remove 꼭 먼저 쓰기
      $("#slider li").eq(count).addClass(classNm).siblings().removeClass(classNm)
  
    }, 3000);
    
  
  })