
document.addEventListener("DOMContentLoaded",()=>{
    const menuIcon = document.querySelector(".menu-icon");
    const sidebar = document.querySelector(".sidebar");
    const closeBtn = document.querySelector(".close-btn");



menuIcon.addEventListener("click",()=>{
    sidebar.classList.add("active");
})

closeBtn.addEventListener("click",()=>{
    sidebar.classList.remove("active")
})

})

// for business video slider
let businessSlider = document.querySelector('.b-slider')
let previousButton = document.getElementById('prevButton')
let nextButton = document.getElementById('nextButton');
let siderWidth = document.querySelector('.slide').offsetWidth+15; 

previousButton.addEventListener('click', function(){businessSlider.scrollBy({left:-siderWidth,behavior:'smooth'});});

nextButton.addEventListener('click', function(){ businessSlider.scrollBy({ left: siderWidth, behavior: 'smooth' }) });

// for personal video slider

let personalSlider = document.querySelector('.p-slider');
let previousButtonPersonal = document.getElementById('prevButtonPersonal');
let nextButtonPersonal = document.getElementById('nextButtonPersonal');
let sliderWidthPersonal = document.querySelector('.slide').offsetWidth + 15;

previousButtonPersonal.addEventListener('click', function(){
    personalSlider.scrollBy({left: -sliderWidthPersonal, behavior: 'smooth'});
});

nextButtonPersonal.addEventListener('click', function(){
    personalSlider.scrollBy({left: sliderWidthPersonal, behavior: 'smooth'});
});