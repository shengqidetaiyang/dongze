/* 
* @Author: Marte
* @Date:   2017-03-04 10:49:22
* @Last Modified by:   Marte
* @Last Modified time: 2017-03-13 17:40:09
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
      $(".commHeader .top .third").bind('click',  function(event) {
          /* Act on the event */
          $(this).find("span").hide();
          $(this).find("ul").show();
      });
      $(".commHeader .top .third ul").bind('click',  function(event) {
          /* Act on the event */
          var e = event || window.event;
          var target = e.target.innerText;
          $(this).hide();
          $(this).parent().find("span").show();
          e.stopPropagation();
          $(this).parent().find("span").text(target);
      });
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

    $(".fix .fifth").on("click",function(){
        var speed=600;//滑动的速度
        $('body,html').animate({ scrollTop: 0 }, speed);
        $(".fixedTop").slideUp();   
        return false;
    })
  var EventUtil={
      getEvent:function(event){return event?event:window.event;},
          //滚轮事件对象的 wheelDelta/FF DOMMouseScroll
      getWheelDelta:function(event){
          if(event.wheelDelta){//ff以外的浏览器
              //在最新版的opera中window返回undefined ， 在opera9.5中返回对象 在9.5版本之前的版本中wheelDelta的正负号颠倒的
              return (window.opera&&window.opera.version()<9.5?-event.wheelDelta:event.wheelDelta);
              }else{return -event.detail*40;}//ff
          },
      //事件处理程序
      addHandler:function(element,type,handler){
          if(element.addEventListener){element.addEventListener(type,handler,false)}//DOM2
          else if(element.attachEvent){element.attachEvent('on'+type,handler);}//ie
          else{element['on'+type]=handler;}//DOM0
          }
  }
  var a=document.getElementById('a');
  EventUtil.addHandler(document,'mousewheel',handleMouseWheel);//注册ie的滚轮事件
  EventUtil.addHandler(document,'DOMMouseScroll',handleMouseWheel);//注册ff的滚轮事件
  function handleMouseWheel(e){
      if($("body").scrollTop()>= 150){
        $(".fixedTop").slideDown();
      }
      else{
        $(".fixedTop").slideUp();      
      }
  }
 
    
});