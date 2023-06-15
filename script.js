
const features1 = document.getElementsByClassName("sec1-container")
const features2 = document.getElementsByClassName("sec2-container")


const features1Arr = Object.values(features1)
const features2Arr = Object.values(features2)


const imageContainer = document.getElementById("desktop-container")
const imageContainer2 = document.getElementById("desktop-container2")

features1Arr.map((feature, index) => feature.addEventListener("click", () => {
    var current = document.getElementsByClassName("active1");
    current[0].classList.remove("active1")
    feature.className += " active1";
    imageContainer.src = `./images/graphics${index+1}.png`;
}))

features2Arr.map((feature, index) => feature.addEventListener("click", () => {
    var current = document.getElementsByClassName("active2");
    current[0].classList.remove("active2")
    feature.className += " active2";
    imageContainer2.src = `./images/graphics${index+5}.png`;
}))

