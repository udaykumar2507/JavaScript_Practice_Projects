var today=new Date();
var day=today.getDay();
var listofDays=["SunDay","MonDay","TuesDay","WednesDay","ThursDay","Friday","SaturDay"];
document.write("<h1 id='h11'>Today is " + listofDays[day] + "</h1>");
var hours=today.getHours();
var minutes=today.getMinutes();
var seconds=today.getSeconds();
var meridium= (hours>=12)?"PM":"AM";
hours =(hours>=12)?hours-12:hours;
if (hours===0 && meridium==="AM"){
    if (minutes===0 && seconds===0){
        hours=12;
        meridium="MidNight";
    }else{
        hours=12;
    }
}
if (hours===0 && meridium==="PM"){
    if (minutes===0 && seconds===0){
        hours=12;
        meridium="Noon";
    }else{
        hours=12;
    }
}
document.write("<h1 id='h12'>" + hours + " " + meridium + ": " + minutes + ": " + seconds + "</h1>");

