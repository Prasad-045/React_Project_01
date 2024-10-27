
import "./Profile.css";
import { useState } from "react";


function Profile(){

var [name,setName]=useState("Rohit Sharma");
var [email,setEmail]=useState("rohit045@gmail.com");
var [image,setImage] = useState("https://c.ndtvimg.com/2021-03/tmsa3mu_rohit-sharma-instagram_625x300_29_March_21.jpg");
var [theme,setTheme] = useState("rightpanellight")

var changeToVirat =()=>{
  setName("Virat Kohli");
  setEmail("Virat018@gmail.com");
  setImage("https://tse3.mm.bing.net/th?id=OIP.AthL6PkD_QjBQNMrN8wXQAHaEU&pid=Api&P=0&h=180")
}
var changeToRohit =()=>{
    setName("Rohit Sharma");
    setEmail("rohit045@gmail.com");
    setImage("https://c.ndtvimg.com/2021-03/tmsa3mu_rohit-sharma-instagram_625x300_29_March_21.jpg")
  }
  var darkMode =()=>{
    var inputElement = document.querySelector("input");
    var label = document.querySelector("label")
   if(inputElement.checked){
    setTheme("rightpanelDark")
    label.innerText="switch to light mode"
   }
   else {
    setTheme("rightpanellight");
    label.innerText="switch to dark mode"
   }
  }
  
 return (<div id="profileContainer">
<div id="leftPanel"><img src={image} alt="error" /></div>
<div className={theme} >
    <dl>
        <dt><b>User Name :</b></dt> 
        <dd>{name}</dd><br />
        <dt><b>Gender :</b></dt>
        <dd>male</dd> <br />
        <dt><b>Email :</b></dt>
        <dd>{email}</dd> <br />
        <dt><b>Description :</b></dt>
        <dd>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum facere nostrum iusto ex, dolore quis? Quibusdam distinctio repudiandae perferendis animi. Fuga perferendis a cupiditate nulla voluptas quae in, libero alias non autem aut neque, ipsa dicta aliquam, quam tenetur? Aliquam, repellendus. Dolorum, ad. Soluta, tempore. Consectetur mollitia eaque repudiandae voluptatibus!</dd>
         <br /> <button onClick={changeToRohit}>Rohit Sharma</button> 
         <button onClick={changeToVirat}>Virat kohli</button> <br /> <br />
        
         <input  type="checkbox" onChange={darkMode}  />
         <label >switch to darkmode</label>
    </dl>

</div>
</div>)
}
export default Profile;