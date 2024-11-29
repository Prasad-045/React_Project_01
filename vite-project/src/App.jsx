import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Nav from "./concepts/Task/Nav";
import Home from "./concepts/Task/Home";
import Electronics from "./pages/Electronics/Electronics";
import Jewellery from "./pages/Jewellery/jewellery";
import Mens from "./pages/Mens/mens";
import Womens from "./pages/Womens/womens";
import ProductDetails from "./pages/ProductDetails/productDetails";
import Login from "./concepts/Task/Login";
import Cart from "./pages/Cart/Cart";


import { useState } from "react";
function App(){
  var [isLoggedIn,setIsLoggedIn] = useState(false)
  return (
    <div >
       {isLoggedIn && <Nav setIsLoggedIn={setIsLoggedIn}/>}

       
      {isLoggedIn ?   
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/electronics" element={<Electronics/>} />
      <Route path="/jewelery" element={<Jewellery/>} />
      <Route path="/men" element={<Mens/>} />
      <Route path="/women" element={<Womens/>} />
      <Route path="/productDetails/:id" element={<ProductDetails/>} />
      <Route path="/login" element={<Home/>} />
      <Route path="/cart" element={<Cart/>} />
      </Routes>
     : <Login setIsLoggedIn={setIsLoggedIn}/>}
    </div>
  );
}
export default App;