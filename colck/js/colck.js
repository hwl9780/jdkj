var c=document.getElementById("Canvas");
var ctx=c.getContext("2d");
var width = ctx.canvas.width;
var height = ctx.canvas.height;

var r = width/2;
var rem=width/200;
function draw(){
    /********************************************这里定义最外圈圆**************************************/
    ctx.save();
    ctx.strokeStyle="#000";
    ctx.translate(r,r);//这里充值起点将默认的（0，0）设为半斤的点，等于将起点定位中心
    ctx.beginPath();//圆的起点为水平方向（1，0）的位置  等于说是时钟3的方向
    ctx.arc(0,0,r-35*rem,0,Math.PI*2,false);
    ctx.closePath();
    ctx.stroke();
/********************************************这里定义外圈刻度 **************************************/
    var minnum = ['15','20','25','30','35','40','45','50','55','60','05','10'];
    ctx.font='15px Arial ';
    ctx.fillStyle="#fff";
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    minnum.forEach(function(number,i){
        var hudu = Math.PI*2/12*i;
        var x=Math.cos(hudu)*(r-35*rem);
        var y =Math.sin(hudu)*(r-35*rem);
        ctx.fillText(number,x,y);
    });

    /********************************************这里定义外圈刻度线**************************************/
    for(var i=0 ;i<60;i++){
        var hudu = Math.PI*2/60*i;
        var x=Math.cos(hudu);
        var y =Math.sin(hudu);
        ctx.strokeStyle = "#fff";
        ctx.beginPath();
        if(i%5==0){
        }else{
            ctx.save();
            ctx.moveTo(x*(r-36*rem), y*(r-36*rem));
            ctx.lineTo(x*(r-32*rem), y*(r-32*rem));
            ctx.strokeStyle = "rgb(200, 218, 38)";
            ctx.stroke(); 
            ctx.restore();
        }
        
    }

    /********************************************这里定义小时刻度**************************************/
    var hournum =[3,4,5,6,7,8,9,10,11,12,1,2];
    ctx.font='30px Arial ';
    hournum.forEach(function(number,i){
        var hudu = Math.PI*2/12*i;
        var x=Math.cos(hudu)*(r-43*rem);
        var y =Math.sin(hudu)*(r-45*rem);
        ctx.fillText(number,x,y);
    });
};

 /********************************************时针*************************************/
function drawhour(hour,minute){
    ctx.save();
    ctx.strokeStyle = "#fff";
    ctx.beginPath();
    var hudu = Math.PI*2/12*hour;
    var ahudu = Math.PI*2/12/60*minute;
    ctx.rotate(hudu+ahudu);
    ctx.lineWidth = 8*rem;
    ctx.lineCap = 'round';
    ctx.moveTo(0,-r/2+40*rem);
    ctx.lineTo(0,(-r/2)+42);
    ctx.stroke();
    ctx.lineWidth = 3*rem;
    ctx.strokeStyle = "#fff";
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(0,-r/2+40*rem);
    ctx.stroke(); 
    ctx.restore();
};
 /********************************************分针**************************************/
 function drawmin(minute,second){
    ctx.save();
    ctx.beginPath();
    var hudu = Math.PI*2/60*minute;
    var bhudu = Math.PI*2/60/60*second;
    ctx.rotate(hudu+bhudu);
    ctx.lineWidth = 5*rem;
    ctx.lineCap = 'round';
    ctx.moveTo(0,-r/2+40*rem);
    ctx.lineTo(0,(-r/2)-11*rem);
    ctx.stroke();
    ctx.lineWidth = 2*rem;
    ctx.strokeStyle = "#fff";
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(0,-r/2+40*rem);
    ctx.stroke(); 
    ctx.restore();
}
 /********************************************秒针**************************************/
function drawsec(second,bSecond){
    ctx.save();
    ctx.strokeStyle="rgb(200, 218, 38)";
    ctx.beginPath();
    var hudu = Math.PI*2/60*second;
    var bhudu =  Math.PI*2/60/1000*bSecond;
    ctx.rotate(hudu+bhudu);
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.moveTo(0,20);
    ctx.lineTo(0,(-r/2)-16*rem);
    ctx.stroke();
    ctx.restore();
}
 /********************************************中心圆**************************************/
function drawcir(){
    ctx.beginPath();
    ctx.fillStyle ="#fff";
    ctx.arc(0,0,3*rem,0,Math.PI*2,false);
    ctx.fill();
}
function drawcir2(){
    ctx.beginPath();
    ctx.fillStyle ="#000";
    ctx.arc(0,0,0.5*rem,0,Math.PI*2,false);
    ctx.fill();
}
/********************************************定义月份**************************************/
function drawmon(week,day){
    ctx.font='20px Arial';
    ctx.save();
    ctx.fillText(week,20*rem,0);
    ctx.restore();
    ctx.fillStyle = "rgb(200, 218, 38)";
    ctx.fillText(day,35*rem,0);
}
function drawtime(){
    ctx.clearRect(0,0,width,height);
    var d = new Date();
    var aHour   = d.getHours();
    var aMinute = d.getMinutes();
    var aSecond = d.getSeconds();
    var bSecond = d.getMilliseconds();
    var aDay = d.getDate();
    var d1 = d.toDateString();
    var aWeek = d1.split(" ")[0];
    //console.log(aDay);
    //console.log(aSecond);
    draw();
    drawcir();
    drawhour(aHour,aMinute);
    drawmin(aMinute,aSecond);
    drawsec(aSecond,bSecond);
    drawmon(aWeek,aDay);
    drawcir2();
    ctx.restore();
}
drawtime();
setInterval(drawtime,100);
/*
下面是一些测试  不需要执行
var date = new Date("2018/1/13");
console.log(date.toDateString());
console.log(date.toDateString().split(" ")[1]);

ctx.strokeStyle="#FF0000";
ctx.beginPath();
ctx.arc(100,100,100,0,Math.PI*2,true);
ctx.closePath();
ctx.stroke();

var d = new Date();
var aHour=document.getElementById('hour');
var aMinute=document.getElementById('minute');
var aSecond=document.getElementById('second');
aHour.innerHTML = d.getHours();
aMinute.innerHTML = d.getMinutes();
aSecond.innerHTML = d.getSeconds();



这里测试出获取的值为数值型 之后确定的时候不需要进行数值转换
alert(d.getHours());
alert(typeof(d.getHours()));

document.write(d.getHours());
document.write(d.getMinutes());
document.write(d.getSeconds());
*/