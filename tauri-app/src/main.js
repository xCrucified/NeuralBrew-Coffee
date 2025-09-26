const view = document.getElementById("view");
if (view && !view.querySelector(".nb-scan")) {
  const scan = document.createElement("div");
  scan.className = "nb-scan";
  view.appendChild(scan);
}