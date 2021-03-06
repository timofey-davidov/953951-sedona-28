let button = document.querySelector('.booking__hotel');
let wrapper = document.querySelector('.popup-wrapper');
let arrivalDay = document.querySelector('#filter_arrival_day');
let departureDay = document.querySelector('#filter_departure_day');
let adultsNumber = document.querySelector('#filter_adults');
let childrenNember = document.querySelector('#filter_children');
let popup = document.querySelector('.popup');

wrapper.classList.remove('popup-wrapper--active');

button.onclick = function () {
  wrapper.classList.toggle('popup-wrapper--active');
};

popup.addEventListener("submit", function (evt) {
  if (!arrivalDay.value || !departureDay.value || !adultsNumber.value || !childrenNember.value) {
    evt.preventDefault();
    wrapper.classList.remove('popup--error');
    wrapper.offsetWidth = wrapper.offsetWidth;
    wrapper.classList.add('popup--error');
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (wrapper.classList.contains('popup-wrapper--active')) {
      evt.preventDefault();
      wrapper.classList.remove('popup-wrapper--active');
      wrapper.classList.remove('popup--error');
    }
  }
});

