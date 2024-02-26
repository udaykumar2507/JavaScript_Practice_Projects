const input=document.getElementById("todo-input")
const listcontainer=document.getElementById("list-container")
function addtask(){
    if (input.value===''){
        alert("Write Any Task First")
    }else{
    let li=document.createElement("li");
    li.innerHTML=input.value;
    listcontainer.append(li);
    let span=document.createElement("span");
    span.innerHTML="\u00d7"
    li.append(span);
    }
    input.value='';
    savedata();
}
listcontainer.addEventListener("click",function(e){
    if (e.target.tagName==='LI'){
        e.target.classList.toggle("checked");
        savedata();
    }else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove();
        savedata();
    }
})
function savedata(){
    localStorage.setItem("data",listcontainer.innerHTML);
}
function displaydata(){
    listcontainer.innerHTML=localStorage.getItem("data");
}
displaydata();