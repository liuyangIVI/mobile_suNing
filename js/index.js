var num = 1 / devicePixelRatio;
document.write('<meta name="viewport" content="width=device-width,initial-scale='+num+',minimum-scale='+num+',maximum-scale='+num+',user-scalable=no" />');
var fz = document.documentElement.clientWidth / 10;
document.getElementsByTagName("html")[0].style.fontSize = fz +"px";
