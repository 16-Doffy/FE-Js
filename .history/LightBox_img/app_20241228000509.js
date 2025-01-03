/* */ 
const img = document.querySelectorAll(".content img");
img.forEach(item => item.addEventListener("click",handleZoomImg));
function handleZoomImg (event){
    console.log(event.target);
} 