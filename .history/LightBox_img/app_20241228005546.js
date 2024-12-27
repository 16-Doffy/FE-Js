const img = document.querySelectorAll(".cc-content img");
img.forEach(item => {
    item.addEventListener("click", handleZoomImg);
});

let imagesArray = []; // To hold the image sources
let currentIndex = 0; // To track the currently displayed image

function handleZoomImg(event) {
    const image = event.target.getAttribute("img");
    imagesArray = Array.from(img).map(item => item.getAttribute("img")); // Populate images array
    currentIndex = imagesArray.indexOf(image); // Set current index

    const template = `
    <div class="lb" onclick="this.remove()">
        <div class="content">
            <i class="fa fa-angle-left lb-prev"></i>
            <img src="${image}" alt="" class="lb-img">
            <i class="fa fa-angle-right lb-next"></i>
        </div>
    </div>`;
    document.body.insertAdjacentHTML("beforeend", template);
}

document.body.addEventListener("click", function (e) {
    const lightIMG = document.querySelector(".lb-img");
    
    // Check if clicked inside the lightbox
    if (e.target.closest(".lb")) { 
        if (e.target.matches(".lb-prev")) {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : imagesArray.length - 1; // Loop to last image
            lightIMG.src = imagesArray[currentIndex]; // Update image source
        } else if (e.target.matches(".lb-next")) {
            currentIndex = (currentIndex < imagesArray.length - 1) ? currentIndex + 1 : 0; // Loop to first image
            lightIMG.src = imagesArray[currentIndex]; // Update image source
        } else if (e.target === lightIMG.parentElement) { // Close the lightbox if clicked on background
            lightIMG.parentElement.parentElement.remove(); // Remove the lightbox
        }
    }
});