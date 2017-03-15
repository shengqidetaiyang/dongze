/* 
* @Author: Marte
* @Date:   2017-03-07 15:33:22
* @Last Modified by:   Marte
* @Last Modified time: 2017-03-15 10:32:17
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
});