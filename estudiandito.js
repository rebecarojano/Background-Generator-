var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " +
    color2.value 
    + ")";

    css.textContent = body.style.background + ";";
}

//color1.addEventListener("input", setGradient);
//color2.addEventListener("input", setGradient);

function getRandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}  

function randomMix() {
    var random1 = getRandomColor();
    var random2 = getRandomColor();

    console.log(random1);
    console.log(random2);

    body.style.background = 
    "linear-gradient(to right, " 
    + random1 
    + ", " 
    + random2 
    + ")";

    css.textContent = body.style.background + ";";
}

//function rotame() { }


setGradient();
