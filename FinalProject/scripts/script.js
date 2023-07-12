// Hamburger
const hamburger = document.querySelector('.hamburger--menu');
const hamburgerDropdown = document.querySelector(".hamburger--menu--dropdown");
const header = document.querySelector('header');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  hamburgerDropdown.classList.toggle('active');
  header.classList.toggle('remove--shadow');
});
