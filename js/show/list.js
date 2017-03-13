/* 
* @Author: Marte
* @Date:   2017-03-07 15:33:22
* @Last Modified by:   Marte
* @Last Modified time: 2017-03-07 18:13:49
*/

$(document).ready(function(){
    $(".content .lists .proList .icon").bind('click',function(){
        $(this).toggleClass('iconActive');
        $(this).parent().toggleClass('active');
    })
    $(".content .top .wrap .search").bind('click',function(event){
        var e = event || window.event;
        e.preventDefault();
    })
});