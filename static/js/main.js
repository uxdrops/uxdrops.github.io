var openNav = document.getElementById('openNav');
var mobileNav = document.getElementById('mobileNav');
var closeNav = document.getElementById('closeNav');

openNav.addEventListener("click", function() {
  mobileNav.classList.add('mobile-nav--is-open');
  console.log('sup fool');
}, false);

closeNav.addEventListener("click", function() {
  mobileNav.classList.remove('mobile-nav--is-open');
  console.log('sup fool');
}, false);