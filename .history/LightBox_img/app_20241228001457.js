/* */ 
const img = document.querySelectorAll(".content img");
img.forEach(item => item.addEventListener("click",handleZoomImg));
function handleZoomImg (event){
    console.log(event.target);
    const image = event.target.getAttribute("image");
    const template =` 
<div class="lb">
    <lb class="content">
        <img src="${image}" alt="" class="lb-img">
    </lb>
</div> `;
document.body.insertAdjacentHTML("beforeend", template);
} 