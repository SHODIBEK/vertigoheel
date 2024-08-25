export default function toggleSubmenu() {
	$(".header__list--submenu").on("click", (e) => {
		const target = $(e.currentTarget);

		target.toggleClass("is-active");
		target.find(".header__submenu").slideToggle();
	});
}
