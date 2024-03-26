const accessKey="6VegtyS_QHtARVXzdc1uIPcafZpsPsOf1c_8qdwYvQU";
const searchform=document.getElementById("Searchform");
const searchBox=document.getElementById("Searchbox");
const searchresult=document.getElementById("result");
const showmore=document.getElementById("show-more-btn");
let keyword="";
let page=1;
async function searchImages(){
    keyword=searchBox.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
    const response=await fetch(url);
    const data=await response.json();
    console.log(data);
    const results=data.results;
    results.map((result)=>{
        const image=document.createElement("img");
        image.src=result.urls.small;
        const imagelink=document.createElement("a");
        imagelink.href=result.links.html;
        imagelink.target="_blank";
        imagelink.appendChild(image);
        searchresult.appendChild(imagelink);
    })
    showmore.style.display="block";
}
searchform.addEventListener("submit",async(e)=>{
  e.preventDefault();
  page=1;  
  searchresult.innerHTML = '';
  searchImages()
})
showmore.addEventListener("click",()=>{
  page++;
  searchImages();
})
