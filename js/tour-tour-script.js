window.onscroll = function() {myFunction()};

var main_navbar = document.getElementById("main_navbar");
var sub_navbar = document.getElementById("sub_navbar");
var sticky = sub_navbar.offsetTop - 68;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    main_navbar.classList.add("first_sticky");
    sub_navbar.classList.add("second_sticky");
  } else {
    main_navbar.classList.remove("first_sticky");
    sub_navbar.classList.remove("second_sticky");
  }
}
 function change_to_registration_page() {
    window.location.href = "../register.html";
 }