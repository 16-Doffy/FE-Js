const img = document.querySelectorAll(".content img");
img.forEach(item => {
    item.addEventListener("click", handleZoomImg);
});

function handleZoomImg(event) {
    const image = event.target.getAttribute("img");
    const template = `
    <div class="lb" onclick="this.remove()">
        <div class="content">
            <img src="${image}" alt="" class="lb-img">
            <i class="fa fa-angle-right lb-next"></i>
        </div>
    </div>`;
    document.body.insertAdjacentHTML("beforeend", template);
}
document.body.addEventListener("click", function(e){
    if(e.target.getAttribute(".lb")){
        e.target.parentNode.removeChild(e.target);
    }
} )