var button = document.querySelector('.btn--find-us');
var popup = document.querySelector('.popup');
var close = document.querySelector('.popup-сlose');
var overlay = document.querySelector('.modal-overlay');
var login = popup.querySelector('[name=user_name]')
var email = popup.querySelector('[name=user_mail]')
var text = popup.querySelector('[name=user_mail-text]')
var form = popup.querySelector('.popup-form')

//Popup

button.addEventListener('click', function (evt) {
	evt.preventDefault();
	overlay.classList.add('modal-overlay--show');
	popup.classList.add('popup--show');
	login.focus();
});

close.addEventListener('click', function (evt) {
	evt.preventDefault();
	overlay.classList.remove('modal-overlay--show');
	popup.classList.remove('popup--show');
	popup.classList.remove('popup--error');
});

form.addEventListener('submit', function (evt) {
	if (!login.value || !email.value || !text.value) {
		evt.preventDefault();
		popup.classList.remove('popup--error');
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add('popup--error');
	}
});

window.addEventListener('keydown', function (evt) {
	if (evt.keyCode === 27) {
		if (overlay.classList.contains('modal-overlay--show') && popup.classList.contains('popup--show')) {
			evt.preventDefault();
			overlay.classList.remove('modal-overlay--show');
			popup.classList.remove('popup--show');
			popup.classList.remove('popup--error');
		}
	}
});

//Слайдер

var sliderControls = document.querySelectorAll('.slide-toggles__btn');
var checkedSliderControl = document.querySelector('.slide-toggles__btn--current');
var slides = document.querySelectorAll('.advantages-slide__item');
var visibleSlide = document.querySelector('.advantages-slide__item--visible');

for (var i = 0; i < sliderControls.length; i++) {
	sliderControls[i].addEventListener('click', function (evt) {
		evt.preventDefault();
		if(!this.classList.contains('slide-toggles__btn--current')) {
			checkedSliderControl.classList.remove('slide-toggles__btn--current');
			checkedSliderControl = this;
			this.classList.add('slide-toggles__btn--current');


			for (var j = 0; j < slides.length; j++) {
				if (sliderControls[j].classList.contains('slide-toggles__btn--current')) {
				visibleSlide.classList.remove('advantages-slide__item--visible');
				slides[j].classList.add('advantages-slide__item--visible');
				visibleSlide = slides[j];
				}
			}
		}
	})
};
