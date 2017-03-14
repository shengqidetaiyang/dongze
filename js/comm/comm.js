/* 
* @Author: Marte
* @Date:   2017-03-07 18:10:19
* @Last Modified by:   Marte
* @Last Modified time: 2017-03-14 16:30:56
*/

$(document).ready(function(){
      $(".search .button").bind("click",function(event){
          var e = event || window.event;
          e.preventDefault();
      })   
    $(".personalBox .first a").on("click",function(){
        $(this).parent().toggleClass('close').siblings('.list').toggle(400);
    })
});