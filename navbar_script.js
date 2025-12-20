var active = "active"
var navbar = document.getElementById("topNav");
var sticky = navbar.offsetTop;
const navbtns = navbar.getElementsByTagName("a");
const sections = document.querySelectorAll("section");

window.onscroll = function() {stickyness(), checkActive()};

function checkActive(){
	var current = sections[0].getAttribute("id");

	sections.forEach((section) => {
		const sectionTop = section.offsetTop;
		if (pageYOffset + navbar.offsetHeight*1.5 >= sectionTop ) {
		current = section.getAttribute("id"); }
	});

	prevActive = navbar.getElementsByClassName(active)
	console.log(prevActive[0].className);
	if (prevActive[0].className != current+" "+active) {
		prevActive[0].className = prevActive[0].className.replace(" "+active, "")
		for (var i = 0; i < navbtns.length; i++) {
			if(navbtns[i].className == current){
				navbtns[i].className += " "+active;
			}
		}
	}
}

function stickyness() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
} 
