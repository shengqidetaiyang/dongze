/* 
* @Author: Marte
* @Date:   2017-03-17 14:56:37
* @Last Modified by:   Marte
* @Last Modified time: 2017-03-17 17:02:47
*/

$(document).ready(function(){
        var len = $(".orderBox").find("li").length;
        len = len - 1;
        $(".orderBox").find("li").eq(len).find(".first").addClass('borderNone');
        $(".orderBox").find("li").eq(len).find(".second").addClass('borderNone');
        $(".orderBox").find("li").eq(len).find(".third").addClass('borderNone');
        $(".orderBox").find("li").eq(len).find(".forth").addClass('borderNone');
        $(".orderBox").find("li").eq(len).find(".fifth").addClass('borderNone');
        $(".orderBox").find("li").eq(len).find(".sixth").addClass('borderNone'); 
});