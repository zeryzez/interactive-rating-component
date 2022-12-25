const mainContainer = document.querySelector(".main-container")
const thanksContainer = document.querySelector(".thanks-container")
const submitButton = document.querySelector(".submit")
const rating = document.getElementById("rating")
const rates = document.querySelectorAll(".numbers")


submitButton.addEventListener("click", () =>{
    thanksContainer.classList.remove("hidden")
    mainContainer.style.display ="none"
})


rates.forEach((rate) => {
    rate.addEventListener("click", () =>{
        rating.innerHTML = rate.innerHTML
    })
})

