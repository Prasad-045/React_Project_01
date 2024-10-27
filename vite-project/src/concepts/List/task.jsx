import React from "react";
import { useState } from "react";

function Task(){
 var [lapitems,setLapitems]  = useState([]);
 var [mobitems,setMobitems] = useState([]);
var mobiles = ["Apple","Samsung","Vivo"];
var laptops = ["LEnovo","MacAir","Acer"];

function fnMobiles(){
  
setMobitems(mobiles)

}
function fnLaptops(){
setLapitems(laptops)

}
    return <div>
        <h2>Data with Maps</h2>
        {
            mobitems.map(function (element){
             return <li>
                {element}
             </li>
            })
        }
         {
            lapitems.map(function (item){
             return <li>
                {item}
             </li>
            })
        }
        <button id="b1" onClick={fnMobiles}>Mobiles</button>
        <button id="b2" onClick={fnLaptops}>Laptops</button>
    </div>
}
export default Task;