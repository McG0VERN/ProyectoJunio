"use strict"

let colour = document.querySelector(".colour")
let divs = document.querySelectorAll(".cube")
let max = 200
let min = 16
let distance=-15
let i = 0
//generamos funcion para sacar un numero random con margenes por arriba y abajo para que nunca nos salga un numero negativo
function generateNumber(min,max) {
    return Math.floor(Math.random() * (max-min+1) + min);
}
 console.log(generateNumber(min,max));


let number1 = generateNumber(min,max)
let number2 = generateNumber(min,max)
let number3 = generateNumber(min,max)
console.log(number1,number2, number3);

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
console.log(colorRGB(i));

for (const el of divs) {
    el.style.background = colorRGB2(i);
    i += 5
}
