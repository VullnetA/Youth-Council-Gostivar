//////////////////////////////////////////////////////////////////////////
//Showcase Functionality
let slideIndex = 0;
let slideInterval;

function plusSlides(n, direction) {
  clearAnimations();
  slideIndex += n;
  showSlides(slideIndex, direction);
  resetTimer();
}

function showSlides(n, direction = "right") {
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = slides.length;
  } else {
    slideIndex = n;
  }

  for (let slide of slides) {
    slide.style.display = "none";
    slide.classList.remove("slideInLeft", "slideInRight");
  }

  let animationClass = direction === "left" ? "slideInLeft" : "slideInRight";
  slides[slideIndex - 1].style.display = "block";
  slides[slideIndex - 1].classList.add(animationClass);
}

function resetTimer() {
  clearTimeout(slideInterval);
  slideInterval = setTimeout(() => plusSlides(1, "right"), 9000);
}

function clearAnimations() {
  let slides = document.getElementsByClassName("mySlides");
  for (let slide of slides) {
    slide.classList.remove("slideInLeft", "slideInRight");
  }
}

showSlides((slideIndex = 1), "right");
resetTimer();

//////////////////////////////////////////////////////////////////////////
//Profile Buttons
const allIndicator = document.querySelectorAll(".indicator li");
const allContent = document.querySelectorAll(".content li");

allIndicator.forEach((item) => {
  item.addEventListener("click", function () {
    const content = document.querySelector(this.dataset.target);

    allIndicator.forEach((i) => {
      i.classList.remove("active");
    });

    allContent.forEach((i) => {
      i.classList.remove("active");
    });

    content.classList.add("active");
    this.classList.add("active");
  });
});
