/* 
* @Author: Marte
* @Date:   2017-03-20 17:23:56
* @Last Modified by:   Marte
* @Last Modified time: 2017-03-20 18:56:11
*/

$(document).ready(function(){
    $(".commentList li .forth p").on("click",function(){
        $(this).parent().parent().slideUp();
    })    
});