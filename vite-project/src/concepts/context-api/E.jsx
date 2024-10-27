import React from "react";
import { useContext } from "react";
import myFirstContext from "./context";

function E(){
 var context =  useContext(myFirstContext)
    return <div>
        <h2>E component</h2>
        <p>{context}</p>
        <br />
        <br />
        <hr />
     
    </div>
}
export default E
