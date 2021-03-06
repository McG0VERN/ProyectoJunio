"use strict"

let colour = document.querySelector(".colour")
let divs = document.querySelectorAll(".cube")
let win = document.querySelector(".win")
let lose = document.querySelector(".lose")
let rgb = document.querySelector(".rgb")

// funcion que genere un número con los limites que le fijemos

function generateNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// funcion que nos devolverá el código rgb que identificaremos con  el SAMPLE
function colorRGB(number1, number2, number3) {
    let color = "rgb(" + number1 + ", " + number2 + ", " + number3 + ")";
    return color;
}
// funcion que nos devolverá el codigo rgb con una variacion
function colorRGB2(number1, number2, number3) {
    colour.style.background = colorRGB();
    //console.log(number1, number2, number3);
    let distance = generateNumber(-20, 20) // metiendo un distance entre estos valores, conseguimos que el cubo a seleccionar no sea siempre ni el color más claro ni el más oscuro, por lo que es más dificil encontrarlo
    console.log(distance);
    let color = "rgb(" + (number1 + distance) + ", " + (number2 + distance) + ", " + (number3 + distance) + ")";
    return color;
}
// funcion que barajará los colores( no la posicion de los cubos que seguirá siendo la misma). Asigna un color "similar" al sample a cada uno de los cubos.
function shuffle() {
    let number1 = generateNumber(20, 200)
    let number2 = generateNumber(20, 200)
    let number3 = generateNumber(20, 200)
    let color = "rgb(" + number1 + "," + number2 + "," + number3 + ")";
    rgb.textContent = color
    let secretPosition = generateNumber(1, 9) //variable que nos creará una posicion aleatoria de entre los 9 cubos.
    let position = 0 // nos dice con cada iteracion en qué cubo estamos, con la finalidad de equiparar la posicion actual con la secreta.
    colour.style.background = colorRGB(number1, number2, number3);
    console.log(number1, number2, number3);
    for (const el of divs) { //recorremos cada uno de los cubos y sumamos 1 posición
        position++;
        console.log(position + " " + secretPosition)
        if (position === secretPosition) { // si la ubicación del cubo es la misma que la posición aleatoria , lo pintamos igual al SAMPLE
            el.style.background = colorRGB(number1, number2, number3);
        } else { // sino.. le metes un color aleatorio
            el.style.background = colorRGB2(number1, number2, number3);
        }
        if (position !== secretPosition && el.style.backgroundColor === colorRGB(number1, number2, number3)) { // debido a tener un distance aleatorio, cabía la posibilidad de que hubiese más de una respuesta correcta, para eliminar todas menos la que queremos indicamos que si la ubicación del cubo es distinta que la posición aleatoria y el background del elemento es igual al color a elegir, nos modifique el valor final para tener siempre una única respuesta posible. Esta fórmula ha sido modificada para el navegador Firefox.
            el.style.backgroundColor = colorRGB(number1 + 2, number2 + 2, number3 + 2);
        }
        console.log(el.style.background);
    }
}

function evaluateScore() { //limitamos las rondas del juego con un aviso cuando se gana el juego o se pierde y se resetean los contadores en el caso de ser necesario
    if (win.textContent === "3") {
        alert("You cracked it!!")
        win.textContent = "0"
        lose.textContent = "0"
    }
    if (lose.textContent === "3") {
        alert("Damn, you're useless!")
        win.textContent = "0"
        lose.textContent = "0"
    }
}

for (const el of divs) {// Se añade el evento onlick a los cubos
    const divClickHandler = () => {
        if (el.style.background === colour.style.background) {// acierto 
            win.textContent++
            shuffle() //barajar de nuevo
        } else { //fallo
            lose.textContent++
            shuffle() // barajar de nuevo
        }
        evaluateScore()
    }
    el.addEventListener("click", divClickHandler)
}
shuffle()// iniciar partida al cargar la página.
