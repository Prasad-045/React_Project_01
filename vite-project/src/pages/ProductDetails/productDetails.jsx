import React from "react";
import "./productDetails.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import addProductincart from "./pdService";

function ProductDetails(){
    //to store the products got from the server
    var [state,setState]= useState(
        {id:0,
        title :"",
        description:"",
        image: "",
        price : 0,
        rating :{rate:0,count:0},
        category : ""
    }
    );
useEffect(()=>{
    //to get the products based on id  from the path parameters of the url
    axios.get(`http://localhost:3000/products/${obj.id}`)
    .then((res)=>{setState(res.data)})
    .catch((err)=>{
        alert("error")
    })
},[])
   var obj = useParams(); // to access path parameters in the url
return <div id="pd-container">
<div id="left-panel">
<img src={state.image} width={"100%"} height={400} alt="" />
</div>
<div id="right-panel">
<h2>{state.title}</h2>
<p>{state.description}</p>
<p>{state.price}</p>
<p>{state.rating.rate}</p>
<p>{state.category}</p>
<button onClick={()=>{addProductincart(state)}}>Add to Cart</button>
<button>Back to Cart</button>
</div>
</div>
}
export default ProductDetails;