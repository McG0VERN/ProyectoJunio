"use strict"

let colour = document.querySelector(".colour")
let divs = document.querySelectorAll(".cube")
let distance = -15
let i = 0
let win = document.querySelector(".win")
let lose = document.querySelector(".lose")


function generateNumber() {
    return Math.round(Math.random() * (255 - distance) + distance);
}
//console.log(generateNumber());
let number1 = generateNumber()
let number2 = generateNumber()
let number3 = generateNumber()
console.log(number1, number2, number3);


function colorRGB() {
    let color = `(${number1}, ${number2}, ${number3})`
    console.log(color);
    return "rgb" + color;
}


colour.style.background = colorRGB();


function colorRGB2(i) {
    let color = `(${number1 + distance + i}, ${number2 + distance + i}, ${number3 + distance + i})`
    console.log(color);
    return "rgb" + color;
}


for (const el of divs) {
    el.style.background = colorRGB2(i);
    i += 5
}

for (const el of divs) {
    const divClickHandler = () => {
        if (el.style.background === colour.style.background) {
            win.textContent++
        } else {
            lose.textContent++
        }
    }
    el.addEventListener("click", divClickHandler)
}