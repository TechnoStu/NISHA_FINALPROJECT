let slideIndex = 1;

function showSlides(n) {
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}


function hoverEffect(element) {
  element.style.backgroundColor = "rgba(0, 0, 0, 0.5)"; // Example hover effect, change as needed
}

// Function to reset hover effect
function resetEffect(element) {
  element.style.backgroundColor = ""; // Reset to default background color
}

showSlides(slideIndex);