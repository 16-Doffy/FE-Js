function handleZoomImg(event) {
    console.log(event.target);
    const image = event.target.getAttribute("src"); // Lấy thuộc tính 'src'
    const template = `
<div class="lb">
    <lb class="content">
        <img src="${image}" alt="" class="lb-img">
    </lb>
</div>`;
    document.body.insertAdjacentHTML("beforeend", template);
}
