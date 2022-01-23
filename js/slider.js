// functions

function classSwicher() {
   slides.forEach(slide => {
      slide.classList.remove("active")
      slides[active].classList.add("active")
   })

   points.forEach(point => {
      point.classList.remove("active")
      points[active].classList.add("active")
   })
}

let goNext = () => {
   active = (active == slides.length - 1) ? 0 : active + 1
   classSwicher()
}

let goPrev = () => {
   active = (active == 0) ? slides.length - 1 : active - 1
   classSwicher()
}

// variables

let active = 0
let timer = 3000
let slideshow = document.querySelector(".slideshow")
let slides = document.querySelectorAll(".slide")
let prev = document.querySelector(".prev")
let next = document.querySelector(".next")
let points = document.querySelectorAll(".points > span")

// setintervall
let runSlideshow = setInterval(goNext, timer)

// points event
points.forEach((point, index) => {
   point.addEventListener('click', e => {
      active = index
      classSwicher()
   })
})

// next event
next.addEventListener('click', e => {
   goNext()

})

// Prev event
prev.addEventListener('click', e => {
   goPrev()

})


// mouseover
slideshow.addEventListener('mouseover', e =>{
   clearInterval(runSlideshow)
})
// mouseleave
slideshow.addEventListener('mouseleave', e =>{
   runSlideshow = setInterval(goNext, timer)
})