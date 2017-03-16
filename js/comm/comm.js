/* 
* @Author: Marte
* @Date:   2017-03-07 18:10:19
* @Last Modified by:   Marte
* @Last Modified time: 2017-03-16 14:59:05
*/
//手机端和移动端切换
$(document).ready(function(){
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

  $(".search .button").bind("click",function(event){
      var e = event || window.event;
      e.preventDefault();
  })   

    $(".personalBox .first a").on("click",function(){
        $(this).parent().toggleClass('close').siblings('.list').toggle(400);
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