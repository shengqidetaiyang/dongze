/* 
* @Author: Marte
* @Date:   2017-03-21 15:30:31
* @Last Modified by:   Marte
* @Last Modified time: 2017-03-21 19:09:58
*/

$(document).ready(function(){
 var lens = $(".cartList li").length;
 var array = [];
 var topFlag = 0;
 for(var i = 0;i < lens;i++){
        array.push(0);
     };   
 $(".contain .order .cartList li .first .wrapCheckbox").each(function(index,ele){
        var count = 0;
        $(ele).on("click",function(){
        lens = $(".cartList li").length; 
        console.log(lens);
            var flag = array[index];
            if(flag == 0){
                flag = 1;
                array[index] = 1;
                $(this).find("input").attr("checked",true); 
                for (var k =0;k<lens;k++){
                    if(array[k] == 1){
                        count++;
                    }
                }
                $(".contain .order .bottom .wrapCheckbox").addClass("active");   
            }
            else{
                flag = 0;
                array[index] = 0;
                $(this).find("input").removeAttr("checked");
                for (var j =0;j<lens;j++){
                    if(array[j] == 1){
                        count++;
                    }
                }
                if(count == 0){
                    $(".contain .order .bottom .wrapCheckbox").removeClass("active");                      
                }
            }
            $(this).parent().parent().toggleClass('active');
            $(".contain .order .bottom .left .words").text("已选（" + count + "）");  
        })
 })
 $(".contain .order .top .first .wrapCheckbox").on("click",function(){
        $(this).toggleClass('active');
        if(topFlag == 0){
             topFlag = 1;
             lens = $(".cartList li").length;
             for(var i = 0;i < lens;i++){
                    array.push(1);
                 };  
             $(".contain .order .cartList li .first .wrapCheckbox").each(function(index,ele){
                    $(ele).find("input").attr("checked",true);
                    $(ele).parent().parent().addClass("active");
             })  
             $(".contain .order .bottom .wrapCheckbox").addClass("active");  
             $(".contain .order .bottom .left .words").text("已选（" + lens + "）");        
        }
        else if(topFlag == 1){
             topFlag = 0;
             lens = $(".cartList li").length;
             for(var i = 0;i < lens;i++){
                    array.push(0);
                 };  
             $(".contain .order .cartList li .first .wrapCheckbox").each(function(index,ele){
                    $(ele).find("input").removeAttr("checked",true);
                    $(ele).parent().parent().removeClass("active");
             })  
             $(".contain .order .bottom .wrapCheckbox").removeClass("active");  
             $(".contain .order .bottom .left .words").text("已选（" + 0 + "）");     
        }
 })
 });