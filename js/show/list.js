/* 
* @Author: Marte
* @Date:   2017-03-07 15:33:22
* @Last Modified by:   Marte
* @Last Modified time: 2017-03-13 17:39:42
*/

$(document).ready(function(){
    $(".content .lists .proList .icon").bind('click',function(event){
        var e = event || window.event;
        $(this).toggleClass('iconActive');
        $(this).parent().toggleClass('active');
        e.stopPropagation();
    })
    $(".content .top .wrap .search").bind('click',function(event){
        var e = event || window.event;
        e.preventDefault();
    })
    $(".proList").on("click",function(){
        window.location.href = "../../html/show/goodsDetail.html?id=0001&style=1";
    })
    $(".content .classfiy ul li ").each(function(index,ele){
        $(ele).on("click",function(){
        $(".content .classfiy ul li ").eq(index).addClass('active').siblings('li').removeClass('active');          
        })
    })
    $(".content .price ul li ").each(function(index,ele){
        $(ele).on("click",function(){
        $(".content .price ul li ").eq(index).addClass('active').siblings('li').removeClass('active');          
        })
    })
    var getPara = function(m){
                var str = window.location.href;
                var strB = str.split("?")[1];
                var strC = strB.split("&");
                var parameter = {};
                for(var i = 0;i < strC.length;i++){
                    if(i == 0){
                     parameter.id = strC[i].split("=")[1];
                    }
                    if(i == 1){
                     parameter.style = strC[i].split("=")[1];
                    }
                }
                return parameter[m];
    }
    var index = getPara("style");
    $(".nav li a").eq(index).addClass('active');
    $(".fixedTop li a").eq(index).addClass('active');
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