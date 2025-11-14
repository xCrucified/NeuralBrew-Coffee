const view = document.getElementById("view");
if (view && !view.querySelector(".nb-scan")) {
  const scan = document.createElement("div");
  scan.className = "nb-scan";
  view.appendChild(scan);
}

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

setActiveButton(location.hash || '#/');
window.addEventListener('hashchange', () => {
  setActiveButton(location.hash);
});