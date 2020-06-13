let popup = document.querySelector('.popup');

let findButton = document.querySelector('.booking .button');
findButton.onclick = function () {
    popup.classList.toggle('popup-closed');
    popup.classList.toggle('popup-opened'); 
  };