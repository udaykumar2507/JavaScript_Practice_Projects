
let qrimg=document.querySelector(".qrimg");
let imagebox=document.querySelector(".img-box");
let qrinput=document.querySelector(".qrinput");
function getqr(){
    if (qrinput.value.length>0){
    qrimg.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrinput.value.trim();
    imagebox.classList.add("show-img");
    }else{
        qrinput.classList.add("error");
        setTimeout(()=>{
            qrinput.classList.remove("error")
        },1000);
    }
}