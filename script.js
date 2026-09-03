const input = document.querySelector('#complaint-input');
const wordCount = document.querySelector('#word-count');
const progress = document.querySelector('.progress-line span');
const continueButton = document.querySelector('#continue-button');
const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('#nav-links');

function updateDraftProgress() {
  const words = input.value.trim() ? input.value.trim().split(/\s+/).length : 0;
  wordCount.textContent = `${words} ${words === 1 ? 'word' : 'words'}`;
  progress.style.width = `${Math.min(35 + words * 2, 92)}%`;
}

input.addEventListener('input', updateDraftProgress);
continueButton.addEventListener('click', () => {
  continueButton.innerHTML = 'Looking good <span aria-hidden="true">&#10003;</span>';
  continueButton.style.background = '#18211d';
  continueButton.style.borderColor = '#18211d';
});
menuButton.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', isOpen);
  menuButton.textContent = isOpen ? 'Close' : 'Menu';
});

updateDraftProgress();
