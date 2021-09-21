import React, { useState } from 'react';
import index from './index.css';
function App(){

const[itemm,updateInput]=useState("");
const[list,updateList]=useState([]);



const addItem =()=>{

  
    list.push({description:itemm})
    updateList(list);
    updateInput("");

}


return(

    <div className="App">
    <div className="text-input">To do list
 <br/>
  <input
     type="text"
     placeholder="Type there"
     value={itemm}
     onChange={(event)=>updateInput(event.target.value)}
  />
   <button
    onClick={()=>addItem()}
    > +
    </button>
    <ul>
     {list.map( item=>{
         return(
          <li key={item.id}>
            {item.value}
            
             </li>
   )
     })}
     </ul>
    <div>
    
    </div>
   <br/>
  </div>
  </div>
)}
export default App;