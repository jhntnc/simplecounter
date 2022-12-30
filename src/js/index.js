//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
//import your own components
import Home from "./component/home.jsx";

let counter1 = 0
let counter2 = 0
let counter3 = 0
let counter4 = 0
let counter5 = 0

function aumentarNumero () {
    if (counter1 > 9) {counter1 = 0 ; counter2++}
    if (counter2 > 9) {counter2 = 0 ; counter3++}
    if (counter3 > 9) {counter3 = 0 ; counter4++}
    if (counter4 > 9) {counter4 = 0 ; counter5++}
}

setInterval(() => {
    aumentarNumero()
    ReactDOM.render(
        <Home 
            counterA={ counter1++ } 
            counterB={ counter2 }
            counterC={ counter3 }
            counterD={ counter4 }
            counterE={ counter5 } 
                        
        />, document.querySelector("#app"))}, 1000)


