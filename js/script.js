let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".bx-search");
let themeBtn = document.querySelectorAll(".theme-buttons");

// Sidebar
btn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});
// Search
searchBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});
// Toggle Color Switch Panel
document.querySelector(".switcher-btn").onclick = () => {
  document.querySelector(".color-switcher").classList.toggle("active");
};
// Color Picker
themeBtn.forEach((color) => {
  color.addEventListener("click", () => {
    let dataColor = color.getAttribute("data-color");
    document
      .querySelector(":root")
      .style.setProperty("---sidebar-color", dataColor);
  });
});
