
"use strict"

let colour = document.querySelector(".colour")
let divs = document.querySelectorAll(".cube")
let min = 20
let max = 235
let distance=-20
let i = 0
let win = document.querySelector(".win")
let lose = document.querySelector(".lose")


function generateNumber(min,max) {
    return Math.floor(Math.random() * (max-min+1) + min);    
}
 console.log(generateNumber(min,max));


function colorRGB() {
    let number1 = generateNumber(min,max)
    let number2 = generateNumber(min,max) 
    let number3 = generateNumber(min,max)
    console.log(number1, number2, number3);
    let color = "("+(number1)+","+(number2)+","+(number3)+")";
    console.log(color);
    return "rgb" + color;  
}

function colorRGB2(i) {
    let number1 = generateNumber(min,max)
    let number2 = generateNumber(min,max) 
    let number3 = generateNumber(min,max)
    colour.style.background = colorRGB();
    console.log(number1, number2, number3);
    let color = "("+(number1 + distance + i)+","+(number2 + distance + i)+","+(number3 + distance + i)+")";
    console.log(color);
    return "rgb" + color;
}

function shuffle (){
    i=0
    let number1 = generateNumber(min,max)
    let number2 = generateNumber(min,max) 
    let number3 = generateNumber(min,max)
    colour.style.background=colorRGB(number1,number2,number3);
    console.log(number1,number2,number3);
    for (const el of divs) {
    el.style.background = colorRGB2(number1,number2,number3);
    i += 5
}
}

for (const el of divs) {
    const divClickHandler = () => {
        if (el.style.background === colour.style.background) {
            win.textContent++
            shuffle ()
        } else {
            lose.textContent++
            shuffle ()
        }
    }
    el.addEventListener("click", divClickHandler)
}
shuffle()