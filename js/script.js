const horzontalSlider = document.querySelectorAll(".horizontal-slider")

const cover = document.querySelector("#cover")
const sidebar_collapse_btn = document.querySelector("#side-bar-collapse")
const horizontalScroll = 300
horzontalSlider.forEach(slide => {
    const leftBtn = slide.querySelector(".scroll-left-btn")
    const rightBtn = slide.querySelector(".scroll-right-btn")
    const cards = slide.querySelector(".cards")
     
    leftBtn.addEventListener("click",() => {

        cards.scrollLeft -= horizontalScroll
    })
    rightBtn.addEventListener("click",() => {
        cards.scrollLeft += horizontalScroll
    })
})

const toggleBtn = document.querySelector(".toggle-button")
 
const aside =document.querySelector("aside")
sidebar_collapse_btn.addEventListener("click", () => {
    aside.classList.remove("active")
    cover.classList.remove("active")
    sidebar_collapse_btn.classList.add("hide")
})
toggleBtn.addEventListener("click", () => {
    aside.classList.toggle("active")
    cover.classList.add("active")
})
cover.addEventListener("click", () => {
aside.classList.remove("active")
 cover.classList.remove("active")
})

 



