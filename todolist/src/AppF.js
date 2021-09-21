import React, { Component, useState } from 'react';

function AppF(){

const[newItem,updateItem]=useState("");
const[list,updateInput]=useState([]);

const addItem =()=>{
    list.push({description:newItem})
    updateInput(list);
}

return(

    <div className="App">
    <div className="text-input">To do list
 <br/>
  <input
     type="text"
     placeholder="Type there"
     value={newItem}
     onChange={(event)=>updateInput(event.target.value)}
  />
   <button
    onClick={()=>this.addItem()}
    > +
    </button>
   <br/>
  </div>
  </div>
)}