function goToByScroll(id){
	document.documentElement.style.scrollPaddingTop = navbar.clientHeight+10+"px";
	document.getElementById(id).scrollIntoView(true);
}