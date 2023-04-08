// select elements
let nav = document.querySelector(".ul");
let navLi = document.querySelectorAll(".list");
let btn = document.querySelector(".btn");
let closeBtn = document.querySelector("div.x-mark");
console.log(btn);
/// open function
btn.addEventListener("click", function () {
  nav.style.cssText = "transform: translateX(0px);";
  closeBtn.style.display = "block";
});
closeBtn.addEventListener("click", function () {
  nav.style.cssText = "transform: translateX(-1000px);";
  closeBtn.style.display = "none";
});
for (let i = 0; i < navLi.length; i++) {
  navLi[i].addEventListener("click", function () {
    nav.style.cssText = "transform: translateX(-1000px);";
    closeBtn.style.display = "none";
  });
}
