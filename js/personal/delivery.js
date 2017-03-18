/* 
* @Author: Marte
* @Date:   2017-03-18 11:10:19
* @Last Modified by:   Marte
* @Last Modified time: 2017-03-18 15:06:33
*/

$(document).ready(function(){
    function random(){
        var m;
        var b = parseInt(Math.random()*10)
        if(b < 5){
            m = b;
        }
        else{
            m = 5;
        }
        return m;
    }   
    for(var i = 0;i < random();i++){
        $(".stateList").eq(i).find(".left").addClass('up');
        $(".stateList").eq(i).find(".right").addClass('down');
    }
    var len = $(".processLists p").length;
    len = len - 1;
    $(".processLists p").eq(0).css({
        border:"none"
    })
    $(".processLists p").eq(len).css({
        border:"none"
    })
    var lens = $(".dot").length - 1;
    $(".dot").eq(lens).addClass('active');
});