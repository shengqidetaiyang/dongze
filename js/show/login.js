/* 
* @Author: Marte
* @Date:   2017-03-14 16:46:41
* @Last Modified by:   Marte
* @Last Modified time: 2017-03-15 16:40:54
*/

$(document).ready(function(){
  $(".selectWrap").on("click",function(){
    $(this).toggleClass("selectWrapActive");
  }) 
    var flag = true;
    $("#select").on("click",function(){
        if(flag){
            $(this).attr("checked",true);
            flag = !flag;
        }
        else{
             $(this).removeAttr('checked');
             flag = !flag;
        }
    })
});