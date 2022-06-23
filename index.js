// Header section

// Order section
var swiper = new Swiper(".menu-slider", {
    grabCursor:true,
    loop:true,
    autoHeight:true,
    centeredSlides:true,
    spaceBetween: 20,
    pagination: {
       el: ".swiper-pagination",
       clickable: true,
    },
    breakpoints: {
       0: {
         slidesPerView: 1,
       },
       700: {
         slidesPerView: 1,
       },
       1000: {
         slidesPerView: 1,
       },
    },
    
 });

 
 