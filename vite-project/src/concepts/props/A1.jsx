import React from "react";
import { useState } from "react";
import B from "./B1";

function A(){
var[state,setState]= useState("-----");
function changeState(){
var inputData = document.querySelector("input").value
setState(inputData)
}
    return <div>
        <h2>A component</h2> <br />
        <input type="text" /> <br /> <br />
        <button onClick={changeState}>Display</button> <br /> <br />
        <B data={state}/>
    </div>
}



export default A;
