/* 
* @Author: Marte
* @Date:   2017-03-20 16:21:10
* @Last Modified by:   Marte
* @Last Modified time: 2017-03-20 18:55:53
*/

$(document).ready(function(){
    $(".order .colList li .button").on("click",function(){
        var str = $(this).parent().attr("class");
        if(str.indexOf("stock") == -1){
            alert('添加购物车成功');
        }
    })
    $(".order li .icon").on("click",function(){
        $(this).parent().slideUp();
    })

    
});