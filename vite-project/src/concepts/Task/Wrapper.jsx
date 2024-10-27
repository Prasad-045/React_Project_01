import Home from "./Home"
import Login from "./Login"
function Wrapper({loggedIn}){

    return <div>
        {
            loggedIn ? <Home/> : <Login/>
        }
    </div>
}
export default  Wrapper;