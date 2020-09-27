$(function () {

    var typed = new Typed('.typed', {
		stringsElement: '.typed-strings',
		typeSpeed: 50,
		startDelay: 500,
		backSpeed: 20,
		backDelay: 1000,
		loop: true,
  		loopCount: 5,
      });
        
	  $('.menu__btn').on('click', function(){
        $('.menu__btn').toggleClass('menu__btn--active');
        $('.header__menu-list').toggleClass('header__menu-list--active');
    });

    $('.menu__list-link').on('click', function(){
        $('.menu__btn').removeClass('menu__btn--active');
        $('.header__menu-list').removeClass('header__menu-list--active');
    });
    

  
});

