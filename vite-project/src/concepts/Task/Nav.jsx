import "./Nav.css";
import { useContext } from "react";
import context from "./context";
import { Link } from "react-router-dom";
function Nav(){
var logout = useContext(context)
    return (<div id="Nav-container">
        <div id="logo">
            <h1>PRasad's</h1>
        </div>
        <div id="items">
            <Link to="/">Home</Link>
            <Link to="/electronics">Electronics</Link>
            <Link to="jewellery">Jewellery</Link>
            <Link to="/men">Men</Link>
            <Link to="/women">Women</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/logout"><button onClick={()=>{
                logout(false)
            }}>
                Logout
            </button></Link>
        </div>
        
    </div>)
}
export default Nav;