import React from "react";
import { useState } from "react";
function Counter(){
   var [count,setCount] = useState(0)
   function changeCount(){
    setCount(count+1)
   }
   return <div>
    <h2>Count is : {count}</h2>
    <button onClick={changeCount}>inCount</button>
   </div>
}
export default Counter;