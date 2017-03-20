/* 
* @Author: Marte
* @Date:   2017-03-20 11:49:33
* @Last Modified by:   Marte
* @Last Modified time: 2017-03-20 15:07:20
*/

// $(document).ready(function(){
    var flag = true;
    $(".order form .fifth .inputWrap").on("click",function(){
        flag = !flag;
        $(this).toggleClass("active");
        if(flag){
            $(this).find("input").attr("checked",true);
        }
        else{
            $(this).find("input").removeAttr('checked')
        }
    })
    var province = $("#province").get(0);
    var city = $("#city").get(0);
    var count = $("#count").get(0);
    var chinaArea = JSON.parse(chinaArea);
    var sIndex = 0;
    var cityIndex = 0;
    //将字符串格式的json数据转换成对象
    // var chinaArea = eval("("+chinaArea+")");
    // var chinaArea = new Function("return " + chinaArea)();

    //1.遍历省份
    var provinceList = chinaArea.china.province;//数组
    for(var i = 0 ; i < provinceList.length; i++) {
        var option = document.createElement("option");
        option.innerHTML = provinceList[i]["-name"];
        province.appendChild(option);
    }
    cityData();
    countData();
    province.onchange = function() {
        //选择省份之后，市区跟着变化
        cityData();
        countData();
    }
    city.onchange = function() {
        countData();
    }
    //市区的数据填充
    function cityData() {
        //清除原来的市区信息
        city.innerHTML = "";
        //2.遍历市区
        sIndex = province.selectedIndex;
        for(var j = 0; j < provinceList[sIndex].city.length;j++) {
            var option = document.createElement("option");
            option.innerHTML = provinceList[sIndex].city[j]["-name"];
            city.appendChild(option);
        }
    }
    //县区数据填充
    function countData() {
        //清除原来的县区信息
        count.innerHTML = "";
        cityIndex = city.selectedIndex;
        var countList = chinaArea.china.province[sIndex].city[cityIndex].county; 
        for(var k = 0; k < countList.length; k++) {
            var option = document.createElement("option");
            option.innerHTML = countList[k]["-name"];
            count.appendChild(option);
        }
    }
// });