$(document).ready(function() {

	var navToggleButton = $('.navigation__toggle');
	var navToggleIcon = $('.navigation__toggle .fa');
	var navBlock = $('.navigation__list');
	
	
	// Мобильная навигация
	navToggleButton.on('click', function(e){
		e.preventDefault();
        //Показываем / скрываем навигацию
		navBlock.toggleClass('navigation__list--open');

        //Меняем иконку на открытую / закрытую
		if ( navToggleIcon.hasClass('fa-bars') ){
			navToggleIcon.removeClass('fa-bars');
			navToggleIcon.addClass('fa-times');
		} else {
			navToggleIcon.removeClass('fa-times');
			navToggleIcon.addClass('fa-bars');
		}
		
	})
}); 