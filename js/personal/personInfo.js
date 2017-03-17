/* 
* @Author: Marte
* @Date:   2017-03-16 14:49:55
* @Last Modified by:   Marte
* @Last Modified time: 2017-03-17 10:08:58
*/

$(document).ready(function(){
    var flag = true;
    $(".selectWrap").on("click",function(){
        $(this).find(".inner").toggle();
        if(flag){
            $(this).find("input").attr("checked",true)
            flag = false;           
        }
        else{
            $(this).find("input").removeAttr("checked");
            flag = true;
        }

    })
    $(".selectBox").on("click",function(){
            $(this).find("input").attr("checked",true);
            $(this).find(".inner").show();
            $(this).siblings('.selectBox').find("input").removeAttr("checked");
            $(this).siblings('.selectBox').find(".inner").hide();
    })
    function isEmail(str){ 
    var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/; 
    return reg.test(str); 
    } 
    $(".mail").on("blur",function(){
        var str = $(this).val();
        if(!isEmail(str)){
            $(".tips").show();
        }
    })
    $(".mail").on("focus",function(){
        $(".tips").hide();
    })
});