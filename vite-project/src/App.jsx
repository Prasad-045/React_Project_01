import "./App.css" ;
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Nav from "./concepts/Task/Nav";
import Count from "./concepts/Axios/Use-Reduce/Count";
import Home from "./concepts/Task/Home";
import Electronics from "./pages/Electronics/Electronics";
import Jewellery from "./pages/Jewellery/jewellery";
import Mens from "./pages/Mens/mens";
import Womens from "./pages/Womens/womens";
import ProductDetails from "./pages/ProductDetails/productDetails";
import Login from "./concepts/Task/Login";
import Cart from "./pages/Cart/Cart";

function App(){
  return (
    <div className="container">
      <Nav></Nav>
      <Count/>
      {/* <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/electronics" element={<Electronics/>} />
      <Route path="/jewellery" element={<Jewellery/>} />
      <Route path="/men" element={<Mens/>} />
      <Route path="/women" element={<Womens/>} />
      
      <Route path="/productDetails/:id" element={<ProductDetails/>} />
      <Route path="/logout" element={<Login/>} />
      <Route path="/login" element={<Home/>} />
      <Route path="/cart" element={<Cart/>} />
      
      </Routes> */}
    </div>
  );
}
export default App;