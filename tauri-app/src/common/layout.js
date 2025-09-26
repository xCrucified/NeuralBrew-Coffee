async function injectLayout(
  headerId = "header-placeholder",
  footerId = "footer-placeholder",
  mainId = "view"
) {
  const _header =
    document.getElementById(headerId) ||
    (() => {
      const d = document.createElement("div");
      d.id = headerId;
      document.body.prepend(d);
      return d;
    })();
  const _main =
    document.getElementById(mainId) ||
    (() => {
      const m = document.createElement("main");
      m.id = mainId;
      document.body.insertBefore(m, document.getElementById(secondId));
      return m;
    })();
  const _footer =
    document.getElementById(footerId) ||
    (() => {
      const f = document.createElement("footer");
      f.id = footerId;
      document.body.appendChild(f);
      return f;
    })();

  const headerRes = await fetch("./components/header.html");
  const mainRes = await fetch("./components/main.html");
  const footerRes = await fetch("./components/footer.html");
  if (!footerRes.ok && !mainRes.ok && !headerRes.ok) {
    console.error("can't load header.html", res.status);
    return;
  }
  _header.innerHTML = await headerRes.text();
  _main.innerHTML = await mainRes.text();
  _footer.innerHTML = await footerRes.text();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => injectLayout());
} else {
  injectLayout();
}

export {}; //module
