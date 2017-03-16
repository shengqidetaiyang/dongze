/* 
* @Author: Marte
* @Date:   2017-03-16 14:55:16
* @Last Modified by:   Marte
* @Last Modified time: 2017-03-16 14:58:37
*/

$(document).ready(function(){
    $(".personalBox .first a").on("click",function(){
        $(this).parent().toggleClass('close').siblings('.list').toggle(400);
    })    
});