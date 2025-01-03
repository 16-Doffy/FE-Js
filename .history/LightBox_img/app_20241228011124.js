const img = document.querySelectorAll(".cc-content img");
img.forEach(item => {
    item.addEventListener("click", handleZoomImg);
});

function handleZoomImg(event) {
    const image = event.target.getAttribute("img");
    const template = `
     <div class="lb" > 
        <div class="content">
        <i class="fa fa-angle-left lb-prev"></i>
            <img src="${image}" alt="" class="lb-img">
            <i class="fa fa-angle-right lb-next"></i>
        </div>
    </div>`;
    document.body.insertAdjacentHTML("beforeend", template);
}
let index = 0; 
document.body.addEventListener("click", function (e) {
    const lightIMG = document.querySelector(".lb-img");
    let lightSrc ="";
    if (e.target.getAttribute(".lb")) {
        e.target.parentNode.removeChild(e.target);
    } else if (e.target.matches(".lb-next")) {

        lightSrc=lightIMG.getAttribute("src");
        index=[...img].findIndex(item => item.getAttribute("src") === lightSrc);
        index=index+1;
        const newSrc = [...img][index].getAttribute("src");
    } else if (e.target.matches(".lb-prev")) { 

    }

});