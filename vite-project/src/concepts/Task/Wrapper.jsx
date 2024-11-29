import Home from "./Home"
import Login from "./Login";
function Wrapper({isLoggedIn}){

    return <div>
        {
            isLoggedIn ? <Home/> : <Login/>
        }
    </div>
}
export default  Wrapper;