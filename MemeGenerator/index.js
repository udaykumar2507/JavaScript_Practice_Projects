const generatememebutton=document.querySelector(".Generate_meme_button");
const memetitle=document.querySelector(".meme_generator .meme_title");
const Img=document.querySelector(".meme_generator img");
const memeauthor=document.querySelector(".meme_generator.memeauthor");
const updatedetails= (url,title) => {
    Img.setAttribute("src",url);
    memetitle.innerHTML=title;
   
}
const Generatememe = () => {
    fetch("https://meme-api.com/gimme")
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data);
        updatedetails(data.url,data.title);
    });

}
generatememebutton.addEventListener("click",Generatememe);
Generatememe();