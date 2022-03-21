const SinglePage = () => {
  const link1 = document.querySelector('.contact');

  const link2 = document.querySelector('.add-new');

  const link3 = document.querySelector('.list');

  link1.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.main-section').classList.add('hide');
    document.querySelector('.main-form').classList.add('hide');
    const hideLink = document.querySelector('.contact-section');
    hideLink.classList.remove('hide');
    hideLink.classList.add('active');
  });

  link2.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.main-section').classList.add('hide');
    document.querySelector('.contact-section').classList.add('hide');
    const hideLink = document.querySelector('.main-form');
    hideLink.classList.remove('hide');
    hideLink.classList.add('active');
  });

  link3.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.main-form').classList.add('hide');
    document.querySelector('.contact-section').classList.add('hide');
    const hideLink = document.querySelector('.main-section');
    hideLink.classList.remove('hide');
    hideLink.classList.add('active');
  });
};

export default SinglePage;
