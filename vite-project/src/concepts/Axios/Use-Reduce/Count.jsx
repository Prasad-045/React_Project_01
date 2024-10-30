import { useReducer } from "react";
var countReducer = (state,action)=>{
var newState;
if (action.type == "inc1"){
    newState = state + 1;
}
else if (action.type == "inc5"){
    newState= state + 5;
}
else if (action.type =="dec1"){
    newState= state - 1;
}
else{
    newState = state - 3
}

return newState;
}
function Count(){
    var[state,dispatch] = useReducer(countReducer,0)
    return <div style={{marginLeft:100, marginTop:100}}>
        <h2>Count is : {state} </h2>
        <button style={{margin:20}} onClick={()=>{
            dispatch({type:"inc1"})
        }}>Incc 1</button>
        <button style={{margin:20}}  onClick={()=>{
            dispatch({type:"inc5"})
        }}>Incc 5</button>
        <button style={{margin:20}} onClick={()=>{
            dispatch({type:"dec1"})
        }}>Decc 1</button>
        <button style={{margin:20}} onClick={()=>{
            dispatch({type:"dec5"})
        }}>Decc 3</button>

    </div>
}
export default Count;