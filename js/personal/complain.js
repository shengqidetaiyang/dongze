/* 
* @Author: Marte
* @Date:   2017-03-18 15:38:35
* @Last Modified by:   Marte
* @Last Modified time: 2017-03-18 18:17:02
*/

$(document).ready(function(){
    $(".button").on("click",function(event){
        var e = event || window.event;
        var people = $(".people").val();
        var phone = $(".phoneNum").val();
        if(people == "" || phone == ""){
            e.preventDefault();
        }
    }) 
    $(".file").on("change",function(event){
        var files = event.target.files;
        var lens = event.target.files.length;
        if(lens > 8){
            lens = 8;
        }
        for(var i = 0;i < lens;i++){
            var URL = window.URL || window.webkitURL;
            var imgURL = URL.createObjectURL(files[i]);
            $(".photo").find("img").eq(i).attr("src",imgURL).parent().show();
        }
    })
    $(".photo .icon").on("click",function(){
        $(".file").click();
    })  
});