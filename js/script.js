const burgerBtn = document.querySelector(".burger");
const barsIcon = document.querySelector(".fa-bars");
const xIcon = document.querySelector(".fa-times");
const nav = document.querySelector(".nav__items");
const allNavItems = document.querySelectorAll(".nav__item");
const modalShadow = document.querySelector(".modal-shadow");

const footerYear = document.querySelector(".footer__year");

const handleNav = () => {
	nav.classList.toggle("active");
	barsIcon.classList.toggle("hide");
	xIcon.classList.toggle("hide");
	burgerBtn.classList.toggle("active");
	modalShadow.classList.toggle("show");

	allNavItems.forEach((item) => {
		item.addEventListener("click", () => {
			nav.classList.remove("active");
			burgerBtn.classList.remove("active");
			barsIcon.classList.remove("hide");
			xIcon.classList.add("hide");
			modalShadow.classList.remove("show");
		});
	});
};

///counter
const counterItems = document.querySelectorAll(".counter__box-item-counter");
const counterBox = document.querySelector(".counter__box");

const windowWidth = window.innerWidth;
const options = {
	threshold: windowWidth >= 528 ? 0.9 : 0.8,
};

// const options = {
// 	rootMargin: windowWidth >= 528 ? "0px 0px -150px 0px" : "0px 0px -500px 0px",
// };
// const options = {
// 	rootMargin: "-250px",
// };

const startCounter = (entry) => {
	if (entry[0].isIntersecting) {
		counterItems.forEach((counter) => {
			const updateCounter = () => {
				const finalNumber = counter.getAttribute("data-number");
				const value = parseInt(counter.textContent);
				const speed = finalNumber / 100;

				if (value < finalNumber) {
					counter.textContent = `${Math.floor(value + speed)}`;
					setTimeout(updateCounter, 1);
				} else {
					counter.textContent = finalNumber;
				}
			};

			updateCounter();
		});
	}
};

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrentYear();

const observer = new IntersectionObserver(startCounter, options);
observer.observe(counterBox);

/////slider
const sliderBox = document.querySelector(".about-us__section-slider-box");
const leftBtn = document.querySelector(".about-us__section-slider-btn-left");
const rightBtn = document.querySelector(".about-us__section-slider-btn-right");
const carouselIamges = document.querySelectorAll(
	".about-us__section-slider-box-img"
);
const carouselWidth = 300;
const carouselSpeed = 4000;
let index = 0;

const handleCarousel = () => {
	index++;
	changeImage();
};

let startCarousel = setInterval(handleCarousel, carouselSpeed);

const changeImage = () => {
	if (index > carouselIamges.length - 1) {
		index = 0;
	} else if (index < 0) {
		index = carouselIamges.length - 1;
	}

	sliderBox.style.transform = `translateX(${-index * carouselWidth}px)`;
};

const handleRightBtn = () => {
	index++;
	resetInterval();
};
const handleLeftBtn = () => {
	index--;
	resetInterval();
};

const resetInterval = () => {
	changeImage();
	clearInterval(startCarousel);
	startCarousel = setInterval(handleCarousel, carouselSpeed);
};

rightBtn.addEventListener("click", handleRightBtn);
leftBtn.addEventListener("click", handleLeftBtn);

burgerBtn.addEventListener("click", handleNav);
window.addEventListener("click", (e) =>
	e.target === modalShadow ? handleNav() : false
);
