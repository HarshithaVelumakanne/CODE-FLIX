function changeTheme() {
var theme = document.getElementById("theme");
document.body.classList.toggle("dark-theme");
if (document.body.classList.contains("dark-theme")) {
  theme.src = "images/sun.png";
} else {
  theme.src = "images/moon.png";
}
}
let menuBtn = document.querySelector('#menu-btn');
let navbar =  document.querySelector('.header .flex .navbar');

// js code to display a particular category of courses
let list1 = document.getElementsByClassName("option");
let list2 = document.getElementsByClassName("category");

menuBtn.onclick = () =>{
menuBtn.classList.toggle('fa-times');
navbar.classList.toggle('active');
}


function openDetails(type) {
for (var i = 0; i < list1.length; i++) {
list1[i].classList.remove("active-option");
}

for (var i = 0; i < list2.length; i++) {
list2[i].classList.remove("active-box");
}

event.currentTarget.classList.add("active-option");
document.getElementById(type).classList.add("active-box");
}

function openAll() {
for (var i = 0; i < list1.length; i++) {
list1[i].classList.remove("active-option");
}
for (var i = 0; i < list2.length; i++) {
list2[i].classList.add("active-box");
}
event.currentTarget.classList.add("active-option");
}
