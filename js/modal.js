const buttonOpenModal = document.querySelector('.main-modal__open');
const modal = document.querySelector('.modal');

const closeModal = event => {
  const target = event.target;

  if(target === modal || target.closest('.modal__close')) {
    modal.classList.remove('is-active');
  }
}

const openModal = () => {
  modal.classList.add('is-active');
};

buttonOpenModal.addEventListener('click', openModal);
modal.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    modal.classList.remove('is-active');
  }
});

