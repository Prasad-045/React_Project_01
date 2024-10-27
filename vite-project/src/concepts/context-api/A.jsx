import React from "react";
import { useState } from "react";
import B from "./B"
import myFirstContext from "./context";
function A(){

var [data,setData] = useState("----")
 
function display(){
    setData("help")
}
    return <div>
        <h2>A component</h2>
       
        <button onClick={display}>Submit</button>

        <br />
        <br />
        <hr />
        <myFirstContext.Provider value={data}>
          <B/>
        </myFirstContext.Provider>
     
    </div>
}
export default A;
