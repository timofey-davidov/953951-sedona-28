let popup = document.querySelector('.popup');
let button = document.querySelector('.booking button');
let arrivalDay = popup.querySelector('.arival_day');
let departureDay = popup.querySelector('.departure_day');

    button.onclick = function () {
    popup.classList.toggle('popup-closed');
    popup.classList.toggle('popup-opened'); 
    arrivalDay.focus();
  };