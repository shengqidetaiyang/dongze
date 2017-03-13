/* 
* @Author: Marte
* @Date:   2017-03-07 18:04:36
* @Last Modified by:   Marte
* @Last Modified time: 2017-03-13 18:07:30
*/

$(document).ready(function(){
    var index = 0;
    var num = 1;
    $(".content .top .goodsTab .right").bind("click",function(event){
        var e = event || window.event;
        index++;
        if(index >= 1){
            index = 1;
        }
        $(this).parent().find("ul").animate({
            left: - index * 64 + "px"
        })
    }) 
    $(".content .top .goodsTab .left").bind("click",function(event){
        var e = event || window.event;
        index--;
        if(index <= 0){
            index = 0;
        }
        $(this).parent().find("ul").animate({
            left: - index * 64 + "px"
        })
    }) 
    $(".content .top .goodsTab .innerTab ul li").bind("click",function(){
        $(this).parent().find("li").removeClass("active");
        $(this).addClass('active');
        var src = $(this).find("img").attr("src");
        $(this).parent().parent().parent().parent().find(".bigImg").find("img").hide();
        $(this).parent().parent().parent().parent().find(".bigImg").find("img").attr('src',src);
        $(this).parent().parent().parent().parent().find(".bigImg").find(".small").fadeIn();
    })  
    $(".standard ul li").bind("click",function(){
        $(this).addClass('active').siblings('li').removeClass('active');
    })  
    $(".content .top .right .num .numbox .plus").bind("click",function(){
        num++;
        $(this).parent().find(".number").text(num);
    })
    $(".content .top .right .num .numbox .minus").bind("click",function(){
        num--;
        if(num <= 1){
            num = 1;
        }
        $(this).parent().find(".number").text(num);
    })
    $(".content .proInfo .left .top span").each(function(index,ele) {
         /* iterate through array or object */
         $(ele).bind("click",function(){
            console.log(index);
            $(this).addClass('active').siblings('span').removeClass('active');
            $(".content .proInfo .left .detail").eq(index).addClass('show').siblings('.detail').removeClass('show');
         })
    });
    $(".content .proInfo .right .searchBox .rightButton").bind("click",function(event){
        var e = event || window.event;
        e.preventDefault();
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
    $(".content .top .goodsTab .bigImg .icon").hover(function(){
        $(this).parent().find(".big").fadeIn();
    },function(){
        $(this).parent().find(".big").fadeOut();
    });
});