
"use strict"

let colour = document.querySelector(".colour")
let divs = document.querySelectorAll(".cube")
let i = 0
let win = document.querySelector(".win")
let lose = document.querySelector(".lose")


function generateNumber(min,max) {
    return Math.floor(Math.random() * (max-min+1) + min);    
}



function colorRGB(number1,number2,number3) {
    let color = "("+number1+","+number2+","+number3+")";
    return "rgb" + color;  
}

function colorRGB2(i,number1,number2,number3) {
    colour.style.background = colorRGB();
    console.log(number1, number2, number3);
    let distance = generateNumber(10, 20)
    let color = "("+(number1 + distance + i)+","+(number2 + distance + i)+","+(number3 + distance + i)+")";
    console.log(color);
    return "rgb" + color;
}

function shuffle (){
    i=0
    let number1 = generateNumber(20,235)
    let number2 = generateNumber(20,235) 
    let number3 = generateNumber(20,235)
    let secretposition = generateNumber(1,9)
    let position = 0
    colour.style.background=colorRGB(number1,number2,number3);
    console.log(number1,number2,number3);
    for (const el of divs) {
        position++;
        console.log(position+" "+secretposition)
        if(position==secretposition) {
            el.style.background = colorRGB(number1,number2,number3);
        } else {
            el.style.background = colorRGB2(i,number1,number2,number3);
        }
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