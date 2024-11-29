import axios from "axios"; 
import "./AxiosCard.css"
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import addProductincart from "../../pages/ProductDetails/pdService";


function AxiosCard({url,title,bgImage}){

  useEffect(()=>{
    display()
  })
var [state,setState] = useState([])

    function display(){
      //sending request to backend application
      //In response it returns a promise object
      //Calling that using then and catch //data is an object 
        var promiseObject = axios.get(url) 
        promiseObject.then((res)=>{
       setState(res.data)
        })
        .catch((err)=>{
            console.log("error")
        })
    }
    return <div>
        <h2>{title} Products</h2>
        <div className="bgImage" style={{backgroundImage:bgImage}}></div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quis ducimus maiores eos. Voluptatibus, tempora quo quae culpa iure sit provident nisi debitis quod. Accusantium, maxime omnis aperiam explicabo labore incidunt, sed nisi animi blanditiis ducimus, voluptatem delectus ipsum facere aut illum aliquam culpa quaerat modi voluptates! Temporibus non reprehenderit hic. Exercitationem, quo quis, tenetur eveniet ipsa autem possimus animi necessitatibus hic beatae, reprehenderit accusamus iure blanditiis earum! Accusantium voluptate corrupti sunt enim vero, debitis doloremque repudiandae, libero praesentium alias saepe repellat dolores quisquam sed animi, possimus consequuntur tempora porro eligendi molestiae. Sint voluptatum dolor nihil dicta, quia dolores, esse blanditiis est atque iste odit quasi nam perferendis? Nulla, natus alias consequuntur maxime fugiat odio recusandae rerum in nihil ut quia dolores doloribus consequatur consectetur, atque dolorum? Assumenda, quidem. Autem, eveniet? Totam aliquid quo obcaecati necessitatibus, ipsum quas labore accusantium repudiandae facere eum architecto dolore excepturi sunt repellendus nihil tempora laudantium iure voluptatibus nemo debitis facilis recusandae error vel? Veritatis, quos magnam fugiat ducimus maiores amet quia libero labore nulla modi quam vero nemo. Beatae, rerum repellendus natus adipisci consectetur animi perferendis sapiente sunt aperiam! Architecto tempore iure molestias ducimus numquam laboriosam esse optio, quibusdam unde officia provident tenetur. Mollitia?</p>
 
        <div id="card-container">
          {/*using map to access the provided data and create jsxml elements  */}
      {state.map((product)=>{
        return <div id="card" key={product.id}>  {/* key is used as ui is repeated based on data in another component */}
            {/* <p>{product.id }<p/> it displays id of the product*/}
      <img width={200} height={200} src={product.image} alt="" />
      <h2>{product.title}</h2>
      <p>{product.price}</p>
      <p>{product.rating.rate}</p>
       <br />
     <Link to={`/productDetails/${product.id}`}><button>Product Details</button></Link> <br /><br />
      <button onClick={()=>{
        addProductincart(product)
      }}>Add to Cart</button> 
       
        </div>
      })} 
        </div>
    </div>
   
}
export default AxiosCard;