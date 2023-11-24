function animstring(id){
var text=document.getElementById(id);
var textnode=text.childNodes[0];
var text1=textnode.data;
setInterval(function(){
    text1=text1[text1.length-1]+text1.substring(0,text1.length-1);
    textnode.data=text1;

},500);
}