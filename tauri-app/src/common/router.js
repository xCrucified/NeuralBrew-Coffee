const routes = {
  "/": "./pages/home.html",
  "/menu": "./pages/menu.html",
  "/about": "./pages/about.html",
  "/contact": "./pages/contact.html",
};

function currentPath() {
  const h = location.hash.slice(1);
  return h || "/";
}

async function navigate() {
  const path = currentPath();
  const file = routes[path] || routes["/"];

  let html = "";
  try {
    const tmp = await fetch(file);
    html = await tmp.text();
  } catch (e) {
    console.error("Route load error:", e);
    html = "<h1>Page not found</h1>"; //fallback
  }

  const view = document.getElementById("view");
  view.innerHTML = html;

  document.querySelectorAll(".btn-group a").forEach((a) => {
    a.classList.toggle("active", a.getAttribute("href") === `#${path}`);
  });
 
  window.scrollTo(0, 0);
}

window.addEventListener("hashchange", navigate);
window.addEventListener("DOMContentLoaded", navigate);

export {};  //module
