/* 
* @Author: Marte
* @Date:   2017-03-16 18:33:57
* @Last Modified by:   Marte
* @Last Modified time: 2017-03-17 16:55:12
*/

$(document).ready(function(){
    $(".orderList .title img").on("click",function(){
        $(this).parent().parent().slideUp();
    })  
    $(".chooseBox .middle").on("click",function(){
        window.location.href = "../../html/personal/orderDetail.html";
    })
    var lens = $(".orderBox").length;
    for(var i = 0;i < lens;i++){
        var len = $(".orderBox").eq(i).find("li").length;
        len = len - 1;
        $(".orderBox").eq(i).find("li").eq(len).find(".first").addClass('borderNone');
        $(".orderBox").eq(i).find("li").eq(len).find(".second").addClass('borderNone');
        $(".orderBox").eq(i).find("li").eq(len).find(".third").addClass('borderNone');
        $(".orderBox").eq(i).find("li").eq(len).find(".forth").addClass('borderNone');
        $(".orderBox").eq(i).find("li").eq(len).find(".fifth").addClass('borderNone');
        $(".orderBox").eq(i).find("li").eq(len).find(".sixth").addClass('borderNone');
    }
});