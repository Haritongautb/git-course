
document.querySelector(".content__title").addEventListener("click", (event) => {
    let clickedPlace = event.target;

    clickedPlace.classList.toggle("active");
});