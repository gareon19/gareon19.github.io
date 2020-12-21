var navbar = document.getElementById("topNav");
var sticky = navbar.offsetTop;

checkActive();
window.onscroll = function() {stickyness()};

function checkActive(){
	var btns = navbar.getElementsByTagName("a");
	for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener("click", function() {
		var current = navbar.getElementsByClassName("active");
		current[0].className = current[0].className.replace("active", "");
		this.className += "active";
		});
	} 
}

function stickyness() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
} 