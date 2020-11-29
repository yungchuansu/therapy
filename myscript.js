

	// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var logobardesktop = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = logobardesktop.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    logobardesktop.classList.add("sticky");
  } else {
    logobardesktop.classList.remove("sticky");
  }
}
	
