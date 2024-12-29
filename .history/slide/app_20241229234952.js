window.addEventListener("load", function(){
    const slider = document.querySelector(".slider");
    const sliderMain = document.querySelector(".slider-main");
    const sliderItem = document.querySelector(".slider-item");
    const nextBtn = document.querySelector(".slider-nex");
    const prevBtn = document.querySelector(".slider-prev");
  const dotItem = document.querySelectorAll(".slider-dot-item");
  const sliderItemWidth = sliderItem[0].offsetWidth;
const slidesLength = sliderItem.length;
sliderMain.style.width=`${slidesLength * sliderItemWidth}px`;

  console.log("sliderItemWidth=" , sliderItemWidth)
});