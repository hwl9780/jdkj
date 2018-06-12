/*关注按钮点击事件*/ 
function show1(){
    var aTrue = document.getElementsByClassName(true);
    var aFalse = document.getElementsByClassName(false);
    if ( aTrue[0].style.display!="none"){
        aTrue[0].style.display="none";
        aFalse[0].style.display="inline";
    }else{
        aTrue[0].style.display="inline";
        aFalse[0].style.display="none";
    }
}

/*function show1(){
    var aTrue = document.getElementById(true);
    var aFalse = document.getElementById(false);
    if ( aTrue.style.display!="none"){
        aTrue.style.display="none";
        aFalse.style.display="inline";
    }else{
        aTrue.style.display="inline";
        aFalse.style.display="none";
    }
};*/

/*计算js类项目个数*/
/*function numjs(){
    var numjs1 = document.getElementsByClassName("js1");
    var numjs2  = document.getElementById("numjs");
    numjs2.innerHTML = numjs1.length;
}
function numcss(){
    var numcss1 = document.getElementsByClassName("css1");
    var numcss2  = document.getElementById("numcss");
    numcss2.innerHTML = numcss1.length;
}
function numweb(){
    var numweb1 = document.getElementsByClassName("css1");
    var numweb2  = document.getElementById("numcss");
    numcss2.innerHTML = numcss1.length;
}
numjs();
numcss();*/
function numfl(){
    var abox3 = document.getElementsByClassName("box3");
    for(var i=0; i<abox3.length;i++){
        var aNumfl = document.getElementById("numfl"+(i+1));
        var aBoxnum = document.getElementsByClassName("boxnum"+(i+1));
        aNumfl.innerHTML = aBoxnum.length;
    }
}
/*个人分类事件 */
numfl();
