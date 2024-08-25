export function headerFixed() {
	const header = document.querySelector(".header");
	const headerHeight = header.offsetHeight;
	let lastScrollTop = 0;
	let windowCurrentScroll = window.pageYOffset;

	function headerFixed(currentScroll) {
		if (currentScroll > headerHeight) {
			header.classList.add("header--filled");
		} else {
			header.classList.remove("header--filled");
		}
	}

	headerFixed(windowCurrentScroll);

	window.addEventListener("scroll", function () {
		let currentScroll = window.pageYOffset;

		headerFixed(currentScroll);

		if (currentScroll > lastScrollTop && currentScroll > headerHeight) {
			header.classList.add("header--hidden");
		} else if (currentScroll < lastScrollTop) {
			header.classList.remove("header--hidden");
		}

		lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
	});
}
