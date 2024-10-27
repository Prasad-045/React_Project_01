import React from "react";
import axios from "axios";
import "./AxiosDemo.css"
import { useState } from "react";
function Axios(){
    var [state,setState] = useState([])
function sendRequest(){
 var promiseObject =   axios.get("https://fakestoreapi.com/products")
 promiseObject.then((res)=>{

setState(res.data);
;
 }).catch((err)=>{
console.log(err);
console.log("catch is called");

 })}

 return <div>
    <h2>Axios Example</h2>
    <button onClick={sendRequest}>
        Acccess
    </button>
    <div id="container">
        {state.length>0 && (
     <table>
        <thead>
            <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Rating</th>
            </tr>
        </thead>
        <tbody>
            

            
    {
        state.map((product)=>{
            return (<tr>
                <img width={100} height={100} src={product.image} alt="" />
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.rating.rate}</td>
                <td></td>
            </tr>)

        })
    }
    
    </tbody>
    </table>)}
    </div>
 </div>
}
export default Axios;