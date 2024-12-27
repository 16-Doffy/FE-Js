/* */ 
const img = document.querySelectorAll(".content img");
img.forEach(item => item.addEventListener("click",handleZoomImg));
function handleZoomImg (event){
    console.log(event.target);
    const template =` 
<div class="lb">
    <lb class="content">
        <img src="../img/c.jpg" alt="" class="lb-img">
    </lb>
</div>

    `
} 