(function(){
     const pic=["Aot","csm","ds","denji","hashira","jjk","Toji","opm"];
     const buttons=document.querySelectorAll(".btn");
     const img=document.querySelector(".img_container");
     let counter=0;
     buttons.forEach(function(button){
        button.addEventListener('click',function(e){
            if (button.classList.contains("leftbtn")){
                counter--;
                if (counter<0){
                    counter=pic.length-1;
                }
                    img.style.background=`url('img/${pic[counter]}.jpg')`


            }
            if (button.classList.contains("rightbut")){
                counter++;
                if (counter>=pic.length){
                    counter=0;
                }
                img.style.background=`url('img/${pic[counter]}.jpg')`
            }
            img.style.backgroundSize = 'cover';
            img.style.backgroundRepeat = 'no-repeat';
        })
     })



})()