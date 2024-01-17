(function(){
    const Container=document.querySelector(".Counter");
    const Lower=document.querySelector(".Lower");
    const Add=document.querySelector(".Add");
    Add.addEventListener('click',function(){
        Container.textContent=parseInt(Container.textContent)+1;
    })
    Lower.addEventListener('click',function(){
        Container.textContent=parseInt(Container.textContent)-1;
    })

})();