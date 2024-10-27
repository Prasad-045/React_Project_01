import { useContext} from "react";
import context from "./context";
import { Link } from "react-router-dom";
import "./Login.css"
function Login(){

   var login = useContext(context)
    return <div id="Login-container">
        <input type="text" placeholder="UserName"/> <br /><br />
        <input type="text" placeholder="Password"/> <br /> <br />
        <Link to="/login"><button onClick={()=>{
            login(true) 
        }}>Login</button></Link>
    </div>
}
export default Login;
