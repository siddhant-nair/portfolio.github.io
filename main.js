// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  // document.body.scrollTop = 0;
  window.scrollTo({top: 0, behavior: 'smooth'});
  // document.documentElement.scrollTop = 0;
}


var options = {
  strings: ['<span>UX DESIGNER.</span>', '<span>UI DESIGNER.</span>', '<span>INTERACTION DESIGNER.</span>', '<span>TRAVELLER.</span>', '<span>FOODIE.</span>','<span>PAINTER.</span>'],
  typeSpeed: 70, 
  loop: true,
  shuffle: true
};

var typed = new Typed('.inner-headings', options);
