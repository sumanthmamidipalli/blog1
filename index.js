const closeab = document.getElementById("closeab");
const about = document.getElementById("about");
const bg0 = document.getElementById("bg0");

bg0.addEventListener("click", function () {
  about.style.opacity = "1";
  about.style.pointerEvents = "all";
});

closeab.addEventListener("click", function () {
  about.style.opacity = "0";
  about.style.pointerEvents = "none";
});
