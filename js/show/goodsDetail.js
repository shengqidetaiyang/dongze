/* 
* @Author: Marte
* @Date:   2017-03-07 18:04:36
* @Last Modified by:   Marte
* @Last Modified time: 2017-03-15 10:31:42
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
});