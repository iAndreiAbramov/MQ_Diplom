(function () {
  const closingBtn = document.querySelector('.popup-close-button');
  const popup = document.querySelector('.popup');

  setTimeout(function () {

    popup.classList.remove('popup-hidden');

  }, 3000);

  closingBtn.addEventListener("click", function () {
    popup.classList.add('popup-hidden');
  });

}())


