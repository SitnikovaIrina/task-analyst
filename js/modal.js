const buttonOpenModal = document.querySelector('.main-modal__open');
const modal = document.querySelector('.modal');
const body = document.querySelector('body');

const bodyUnLock = () => {
  setTimeout(function () {
    body.style.paddingRight = 0;
    body.classList.remove('body-overflow');
  }, 500)
}

const closeModal = event => {
  const target = event.target;

  if(target === modal || target.closest('.modal__close')) {
    modal.classList.remove('is-active');
    bodyUnLock();
  }
}

const openModal = () => {
  modal.classList.add('is-active');

  const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

  body.style.paddingRight = lockPaddingValue;
  body.classList.add('body-overflow');
};

buttonOpenModal.addEventListener('click', openModal);
modal.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    modal.classList.remove('is-active');
    bodyUnLock();
  }
});
