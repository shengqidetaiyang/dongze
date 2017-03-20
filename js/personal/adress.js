/* 
* @Author: Marte
* @Date:   2017-03-20 10:01:18
* @Last Modified by:   Marte
* @Last Modified time: 2017-03-20 15:10:38
*/

$(document).ready(function(){
    $(".adressList li .forth .del").on("click",function(){
        $(this).parent().parent().slideUp();
    })
    $(".adressList li .forth .default").on("click",function(){
        alert("默认地址设置成功");
    })
    $(".adressList li .forth .edit").on("click",function(){
        window.location.href = "./addaddress.html";
    })
    
});