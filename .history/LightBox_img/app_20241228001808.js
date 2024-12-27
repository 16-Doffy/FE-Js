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
        </div>
    </div>`;
    document.body.insertAdjacentHTML("beforeend", template);
}