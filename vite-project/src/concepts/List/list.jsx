import React from "react";
function List(){
    var data = ["apple","oneplus","samsung"]
return <div>
    <h2>List in React</h2>
    <ol>
    {
        //map function approaches every element in the array and adds  to  the  callback function returns jsx element which ever needed.
        data.map(function (element){
        return <li>{element}</li>
        })
    }
    </ol>
</div>
}
export default List;