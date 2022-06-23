"use strict"

let colour = document.querySelector(".colour")
let divs = document.querySelectorAll(".cube")
let distance = -20
//let i = 0
let win = document.querySelector(".win")
let lose = document.querySelector(".lose")
let divsArray = Array.from(divs);
console.log(divsArray);

/* function generateNumber() {
    return Math.floor(Math.random() * (235 - 20 + 1) + 20);
}
//console.log(generateNumber());
let number1 = generateNumber()
let number2 = generateNumber()
let number3 = generateNumber()
//console.log(number1, number2, number3);



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
} */


for (const el of divs) {
    const divClickHandler = () => {
        let i = 0
        function generateNumber() {
            return Math.floor(Math.random() * (235 - 20 + 1) + 20);
        }
        //console.log(generateNumber());
        let number1 = generateNumber()
        let number2 = generateNumber()
        let number3 = generateNumber()
        //console.log(number1, number2, number3);



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
        if (el.style.background === colour.style.background) {
            win.textContent++
            alert("Congratulations, you got it right!")
        } else {
            lose.textContent++
            alert("Sorry, it was not correct!")
        }
        if (win.textContent === "3") {
            alert("Congratulations, you have won the game!")
            win.textContent = "0"
            lose.textContent = "0"
        }
        if (lose.textContent === "3") {
            alert("Sorry, you lost the game!")
            win.textContent = "0"
            lose.textContent = "0"
        }
    }
    el.addEventListener("click", divClickHandler)
}
