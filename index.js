/* Preloader after 3second adding none class and removing preloader*/

// Header section

// Order section

// products section
var swiper = new Swiper(".slide-content", {
	slidesPerView: 3,
	spaceBetween: 25,
	loop: true,
	centerSlide: "true",
	fade: "true",
	grabCursor: "true",
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
		dynamicBullets: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},

	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		520: {
			slidesPerView: 2,
		},
		950: {
			slidesPerView: 3,
		},
	},
});

$(document).ready(function () {
	$("#client-logos").owlCarousel({
		loop: true,
		margin: 15,
		nav: true,
		responsive: {
			0: {
				items: 2,
			},
			600: {
				items: 4,
			},
			1000: {
				items: 6,
			},
		},
		navText: [
			"<img src='http://pixsector.com/cache/a8009c95/av8a49a4f81c3318dc69d.png'/>",
			"<img src='http://pixsector.com/cache/81183b13/avcc910c4ee5888b858fe.png'/>",
		],
	});
});
