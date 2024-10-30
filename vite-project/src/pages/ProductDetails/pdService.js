import axios from "axios";
function addProductincart(data){
axios.post("http://localhost:3000/addToCart",data)
.then(()=>{alert("product added in cart")})
.catch(()=>{alert("error")})
}
export default addProductincart;