const button=document.querySelector("button");
const body=document.querySelector("body");
const  colorArr=['red','Blue','green','yellow','pink'];
body.style.backgroundColor='orange';
button.addEventListener('click',Changclrfunc)
function Changclrfunc(){
    const colorInd=parseInt(Math.random()*colorArr.length);
    body.style.backgroundColor=colorArr[colorInd];
}