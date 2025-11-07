async function injectLayout(
  headerId = "header-placeholder",
  // footerId = "footer-placeholder",
  // mainId = "view"
) {
  const _header =
    document.getElementById(headerId) ||
    (() => {
      const d = document.createElement("div");
      d.id = headerId;
      document.body.prepend(d);
      return d;
    })();
  // const _main =
  //   document.getElementById(mainId) ||
  //   (() => {
  //     const d = document.createElement("main");
  //     d.id = mainId;
  //     document.body.insertBefore(d, document.getElementById(secondId));
  //     return d;
  //   })();
  // const _footer =
  //   document.getElementById(footerId) ||
  //   (() => {
  //     const d = document.createElement("footer");
  //     d.id = footerId;
  //     document.body.appendChild(d);
  //     return d;
  //   })();

  const headerRes = await fetch("./header.html");
  // const mainRes = await fetch("./components/main.html");
  // const footerRes = await fetch("./components/footer.html");

  // if (!footerRes.ok && !headerRes.ok) {
  //   alert("can't load header.html", res.status);
  //   return;
  // }
  return _header.innerHTML = await headerRes.text();
  // _main.innerHTML = await mainRes.text();
  // _footer.innerHTML = await footerRes.text();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => injectLayout());
} else {
  injectLayout();
}

export {}; //module EXPORT