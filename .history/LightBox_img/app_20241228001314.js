/* */ 
const img = document.querySelectorAll(".content img");
img.forEach(item => item.addEventListener("click",handleZoomImg));
function handleZoomImg (event){
    console.log(event.target);
    const img = event.target.getAttribute("img");
    const template =` 
<div class="lb">
    <lb class="content">
        <img src="${img}" alt="" class="lb-img">
    </lb>
</div> `;
document.body.insertAdjacentHTML("beforeend", template);
} 