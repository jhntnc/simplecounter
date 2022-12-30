import React from "react";
//import { render } from "react-dom";

function Card (props) {

    return (
        <div className=" col-1 text-white pt-4 pb-4 fs-1 bg-dark m-2 text-center">{props.counter}</div>
    )
}

export default Card