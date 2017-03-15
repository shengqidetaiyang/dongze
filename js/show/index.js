/* 
* @Author: Marte
* @Date:   2017-03-04 10:49:22
* @Last Modified by:   Marte
* @Last Modified time: 2017-03-15 10:35:19
*/

$(document).ready(function(){
      var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        
        // 如果需要分页器
        pagination: '.swiper-pagination',
        
        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        
      })   
      $(".content .smallTab .right .choose").each( function(index,ele) {
         $(ele).bind('click',function(event){
          var e = event || window.event;
          $(this).parent().find("div").css({
            color:"#454545"
          });
          $(this).parent().find("div").eq(index).css({
            color:"#fff"
          });
          $(this).parent().find("img").hide();
          $(this).parent().find("img").eq(index).show();
          $(this).parent().parent().find(".left").find("img").fadeOut();
          $(this).parent().parent().find(".left").find("img").eq(index).fadeIn();
      })
      });
      $(".foodProList li .bottom .icon").each(function(index,ele){
        $(ele).bind("click",function(event){
            var e = event || window.event;
            $(this).toggleClass("activeIcon");
            $(this).parent().parent().toggleClass("activeInner");
            e.stopPropagation();
        })
      })
      $(".foodProList li .inner").on("click",function(){
        window.location.href = "../../html/show/goodsDetail.html?id=0001&style=1"
      })
      $(".foodProListB li .inner").on("click",function(){
        window.location.href = "../../html/show/goodsDetail.html?id=0001&style=2"
      })

      var index = 0;
      $(".bottomTab .right").bind("click",function(){
        index++;
        if(index >=1){
          index = 1;
        }
        $(this).parent().find("ul").animate({
           left: -400*index + "px"
        })
      })
      $(".bottomTab .left").bind("click",function(){
        index--;
        if(index <= 0){
          index = 0;
        }
        $(this).parent().find("ul").animate({
           left: -400*index + "px"
        })
      })
});