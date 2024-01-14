(function(){
    const form=document.querySelector("#Messageform");
    form.addEventListener("submit",function(e){
        e.preventDefault();
        const message=document.querySelector("#Message");
        const feedback=document.querySelector(".feedback");
        const messagecontent=document.querySelector(".Message_content");
        if (message.value ===''){
            feedback.classList.add('show');
            setTimeout(function(){
                feedback.classList.remove('show')
            },4000)
        }else{
              messagecontent.textContent=message.value;
              message.value='';
        }
    })

})()