
const guess=Math.floor(Math.random()*10)+1;
let gueses=0;
document.getElementById("mybutton").onclick=function(){
    let val=document.getElementById("num").value;
    gueses+=1;
    if (val==guess){
        alert(`${val} is the random num which found in step ${gueses} `);
    }else if(val<guess){
        alert("To Low");
    }else{
        alert("Too Large");
    }
    
}
