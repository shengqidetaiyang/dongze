/* 
* @Author: Marte
* @Date:   2017-03-14 16:46:41
* @Last Modified by:   Marte
* @Last Modified time: 2017-03-14 17:56:39
*/

$(document).ready(function(){
    var index = 60;
    var flag = true;
    $(".getCode").on("click",function(){
        var that = $(this);
        if(flag){
            var timer = setInterval(function(){
                index--;
                flag = false;
                if(index == 0){
                    index = 60;
                    flag = true;
                    clearInterval(timer);
                    that.text("获取验证码");
                }
                else{
                    that.text(index + " 秒");
                }
            },100);
        }

    });    
});