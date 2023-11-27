var today=new Date();
var christmas=new Date(today.getFullYear(),11,25);
if (today.getMonth()==11 && today.getDate()>25){
    christmas.setFullYear(today.getFullYear()+1);
}
var oneday=1000*60*60*24;
var timeRemaining=Math.ceil((christmas.getTime()-today.getTime())/oneday);
document.write("<h1>"+timeRemaining+" left for Christmas"+"</h1>");
