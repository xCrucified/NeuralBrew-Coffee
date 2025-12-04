const buttons = document.querySelectorAll('.nav-link');

function setActiveButton(hash) {
  buttons.forEach(btn => {
    const target = btn.dataset.href;
    btn.classList.toggle('active', target === hash);
  });
}

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.href;
    location.hash = target; // Меняет URL (например, #/menu)
    setActiveButton(target);
  });
});

window.addEventListener('hashchange', () => {
  setActiveButton(location.hash);
});
