// sticky header
var header = document.querySelector('header');

window.addEventListener('scroll', stickySwitch);

function stickySwitch(){
	header.classList.toggle('sticky', window.scrollY > 0);
}


//responsive hamburger menu

var hamburger = document.querySelector('#hamburger');
var nav = document.querySelector('.nav');
var navLinks = document.querySelectorAll('.nav li');

//toggle nav
hamburger.addEventListener('click', () => {
	nav.classList.toggle('nav-active');
	Array.from(navLinks).forEach( (li, index) => {
		if (li.style.animation){
			li.style.animation = '';
		}else {
			li.style.animation = `navFade 0.5s forwards ${index / 7 + .5}s`
		}
	})

	//burger animation
	hamburger.classList.toggle('toggle');
})

//loadbar animation
var element = document.getElementById('photoshop');
var elementHeight = element.clientHeight;

//element Selection
var one = document.querySelectorAll('.one');
var two = document.querySelectorAll('.two');
var three = document.querySelectorAll('.three');
var four = document.querySelectorAll('.four');

//end

document.addEventListener('scroll', animate);

// check if element is in view
function inView() {
  // get window height
  var windowHeight = window.innerHeight;
  // get number of pixels that the document is scrolled
  var scrollY = window.scrollY || window.pageYOffset;
  
  // get current scroll position (distance from the top of the page to the bottom of the current viewport)
  var scrollPosition = scrollY + windowHeight;
  // get element position (distance from the top of the page to the bottom of the element)
  var elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight;
  
  // is scroll position greater than element position? (is element in view?)
  if (scrollPosition > elementPosition) {
    return true;
  }
  
  return false;
}

function animate(){
	if (inView()){
		Array.from(one).forEach( (div, index) => {
			div.style.animation = '';
			div.style.animation = `loadone .8s forwards ${index / 7}s`;
		})
		Array.from(two).forEach( (div, index) => {
			div.style.animation = '';
			div.style.animation = `loadtwo .8s forwards ${index / 7}s`;
		})
		Array.from(three).forEach( (div, index) => {
			div.style.animation = '';
			div.style.animation = `loadthree .8s forwards ${index / 7}s`;
		})
		Array.from(four).forEach( (div, index) => {
			div.style.animation = '';
			div.style.animation = `loadfour .8s forwards ${index / 7}s`;
		})

	}
}

/*

//animating the services
var serv = document.querySelectorAll('.serv');
var cp = document.querySelector('#cp');
var servHeight = cp.clientHeight;
window.addEventListener('scroll', displayServices)

// check if element is in view
function servView() {
  // get window height
  var windowHeight = window.innerHeight;
  // get number of pixels that the document is scrolled
  var scrollY = window.scrollY || window.pageYOffset;
  
  // get current scroll position (distance from the top of the page to the bottom of the current viewport)
  var scrollPosition = scrollY + windowHeight;
  // get element position (distance from the top of the page to the bottom of the element)
  var elementPosition = cp.getBoundingClientRect().top + scrollY + servHeight;
  
  // is scroll position greater than element position? (is element in view?)
  if (scrollPosition > elementPosition) {
    return true;
  }
  
  return false;
}

function displayServices(){
	if (servView()){
			Array.from(serv).forEach( (div, index) => {
			div.style.animation = `visibleServ .5s forwards ${index / 7}s`
	})
	}
}

*/

//animating projects
var projects = document.querySelectorAll('.prj');
var prj2 = document.querySelector('#prj2');
var prjHeight = prj2.clientHeight;
window.addEventListener('scroll' , animateprj);

function prjView() {
	// get window height
  var windowHeight = window.innerHeight;
  // get number of pixels that the document is scrolled
  var scrollY = window.scrollY || window.pageYOffset;
  
  // get current scroll position (distance from the top of the page to the bottom of the current viewport)
  var scrollPosition = scrollY + windowHeight;
  // get element position (distance from the top of the page to the bottom of the element)
  var elementPosition = prj2.getBoundingClientRect().top + scrollY + prjHeight;
  
  // is scroll position greater than element position? (is element in view?)
  if (scrollPosition > elementPosition) {
    return true;
  }
  
  return false;
}



function animateprj(){
	if (prjView()){
			Array.from(projects).forEach( (prj, index) => {
			prj.style.animation = `prj .8s forwards ${index / 3}s`
	})
	}
}
