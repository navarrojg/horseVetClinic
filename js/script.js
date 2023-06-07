const burgerBtn = document.querySelector(".burger");
const barsIcon = document.querySelector(".fa-bars");
const xIcon = document.querySelector(".fa-times");
const nav = document.querySelector(".nav__items");
const allNavItems = document.querySelectorAll(".nav__item");

const footerYear = document.querySelector(".footer__year");

const handleNav = () => {
	nav.classList.toggle("active");
	barsIcon.classList.toggle("hide");
	xIcon.classList.toggle("hide");
	burgerBtn.classList.toggle("active");

	allNavItems.forEach((item) => {
		item.addEventListener("click", () => {
			nav.classList.remove("active");
			burgerBtn.classList.remove("active");
			barsIcon.classList.remove("hide");
			xIcon.classList.add("hide");
		});
	});
};

////////////////////////////
// const x = 200
// const cards = document.querySelectorAll('.team__card')
// const card1 = document.querySelector('team__card-one')
// const card2 = document.querySelector('team__card-two')
// const card3 = document.querySelector('team__card-three')
// const card4 = document.querySelector('team__card-four')
// const card5 = document.querySelector('team__card-five')

// const karuzela = () => {
// 	cards.forEach(card => {
// 		card.style.transform = 'translateX(200px)'
// 	})
// }

// const handleOrder = () => {
// 	car
// }

// let interval = setInterval(karuzela, 1000)
///////////////////////

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

burgerBtn.addEventListener("click", handleNav);
