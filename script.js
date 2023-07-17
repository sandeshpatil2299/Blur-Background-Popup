const containerEl= document.querySelector(".container");
const btnEl= document.querySelector(".btn");
const popUp= document.querySelector(".popUp");
const closePop= document.querySelector(".closePop");

btnEl.addEventListener("click", () => {
   containerEl.classList.add("active");
   popUp.classList.remove("active");
})

closePop.addEventListener("click", () => {
   popUp.classList.add("active");
   containerEl.classList.remove("active");
})