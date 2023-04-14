import footer from "./components/footer.js";
let mainFooter = document.getElementById("imported-footer");
mainFooter.innerHTML = footer();

import navbar from "./components/navbar.js";
let HeadNavbar = document.getElementById("MainNavbar");
HeadNavbar.innerHTML = navbar();

document.getElementById("Mumbai-btn").addEventListener("click", deleteMum);
function deleteMum() {
  document.getElementById("Mumbai-input").value = "";
}

let dataArr = JSON.parse(localStorage.getItem("data")) || [];
let loginName = document.getElementById("login-span");
let detailName = document.getElementById("detail-span");
if (dataArr.length > 0) {
  loginName.textContent = dataArr[data.length - 1].firstName;
  detailName.textContent =
    "Have a nice journey" + " " + dataArr[data.length - 1].firstName;
}

let booking_Data = JSON.parse(localStorage.getItem("info")) || [];
document.getElementById("searchButton5").addEventListener("click", savaInfo);
function savaInfo() {
  let obj = {
    city_name: document.getElementById("Mumbai-input").value,
    chech_in: document.getElementById("check-in-date").value,
    check_out: document.getElementById("check-out-date").value,
  };
  booking_Data.push(obj);
  localStorage.setItem("info", JSON.stringify(booking_Data));
  window.location = "yogeshIndex.html";
}

document.getElementById("login-btn").addEventListener("click", loginFun);
function loginFun() {
  window.location = "login.html";
}