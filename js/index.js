// Find the place slider
const slider = document.querySelector(".slider");
const sliderBlocks = document.querySelectorAll(".slider-block");
let currentSlide = 0;
const slideWidth = sliderBlocks[0].clientWidth;
nextSlide();
const slideInterval = setInterval(nextSlide, 3000);

function nextSlide() {
    currentSlide = (currentSlide + 1) % sliderBlocks.length;
    slider.style.transform = `translateX(${-slideWidth * currentSlide}px)`;
}

// Filter of houses in our recomendation section
function filterHouses(value) {
    const cards = document.querySelectorAll(".recomendation__cards .card");
    cards.forEach((element) => {
        if (element.getAttribute("value") == value.target.value) {
            element.classList.remove("hide");
        } else {
            element.classList.add("hide");
        }
    });
}

// House slider
const sliderHouses = document.querySelector(".recomendation__cards");
const cards = sliderHouses.querySelectorAll(".card");

const navLeft = document.querySelector(".nav-button__left");
const navRight = document.querySelector(".nav-button__right");
let currentCardIndex = 0;
sliderHouses.style.transform = `translateX(${-currentCardIndex * 30}%)`;

navLeft.addEventListener("click", () => {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        sliderHouses.style.transform = `translateX(${-currentCardIndex * 30}%)`;
    }
});

navRight.addEventListener("click", () => {
    if (currentCardIndex < cards.length - 1) {
        currentCardIndex++;
        sliderHouses.style.transform = `translateX(${-currentCardIndex * 30}%)`;
    }
});

// Modal
const sellPhotos = document.querySelector(".sell-photos");
const modal = document.querySelector(".modal");
const modalContent = modal.querySelector(".modal__content");

sellPhotos.addEventListener("click", (event) => {
    const clickedElement = event.target;

    if (clickedElement.tagName === "IMG") {
        const modalElement = clickedElement.cloneNode(true);
        modalContent.innerHTML = "";
        modalContent.appendChild(modalElement);
        modal.style.display = "block";
    }
});

modal.addEventListener("click", (event) => {
    if (
        event.target.classList.contains("modal") ||
        event.target.classList.contains("modal__close")
    ) {
        modal.style.display = "none";
    }
});
