import helpers from '../helpers';

/**
* Модуль "Плавный переход к якорю"
*/
const init = () => {
	helpers.$document.on('click.anchor', '.js-to-anchor', (e) => {
		e.preventDefault();
		e.stopPropagation();

		const id = $(e.currentTarget).attr('href');
		const speed = $(e.currentTarget).data('speed') || 500;
		const offset = -helpers.$header.outerHeight(true);

		helpers.scrollTo($(id), speed, offset);
	});
};

const destroy = () => {
	helpers.$document.off('.anchor');
};

export default {
	init,
	destroy,
};
