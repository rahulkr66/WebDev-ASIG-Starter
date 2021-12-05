let lastKnownScrollPosition = 0;
let ticking = false;

function onScroll(scrollPos) {
  // Do something with the scroll position
  console.log("Scrolled!");
  scrollPos = 10 + "px";
}

window.addEventListener("scroll", function() {
  const distance = window.scrollY;
  document.querySelector(".parallax-inner").style.transform = `translateY(${distance * 0.75}px)`;
})
