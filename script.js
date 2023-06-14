const features = document.getElementsByClassName("feature-container")
const featuresArr = Object.values(features)
const imageContainer = document.getElementById("desktop-container")

featuresArr.map((feature, index) => feature.addEventListener("click", () => {
    var current = document.getElementsByClassName("active");
    current[0].classList.remove("active")
    feature.className += " active";
    imageContainer.src = `./images/graphics${index+1}.png`;
}))

