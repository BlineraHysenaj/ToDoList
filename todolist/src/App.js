import React, { Component } from 'react';

import index from './index.css'
class App extends Component{
constructor(props){
  super(props);

  this.state={
    newItem:"",
    list:[]
  }
}
updateInput(key, value){

// e bon update state=in
  this.setState({
    [key]:value
  })

}
addItem(){
  //me kriju item me id unike
    const newItem={
       id:1+ Math.random(),
       value: this.state.newItem.slice()
    }
  //me bo copy listen momentale te items
    const list= [...this.state.list];

  //me kriju nje item te re ne liste
    list.push(newItem); 

 //me updatu state-in me listene re dhe me ja vendos inputat e newItem-it
    this.setState({
      list,
      newItem:""
  });
}

deleteItem(id){
  //me bo copy listen momentale te items
  const list=[...this.state.list];

  // me i filtru njesite qe kane me u fshi
  const updatedList=list.filter(item=> item.id!==id);

  this.setState({list:updatedList})
}


render(){
  return (
    <div className="App">
      <div className="text-input">To do list
   <br/>
    <input
       type="text"
       placeholder="Type there"
       value={this.state.newItem}
       onChange={e=>this.updateInput("newItem", e.target.value)}
    />
    <button
    onClick={()=>this.addItem()}
    > +
    </button>
   <br/>
   <ul>
     {this.state.list.map( item=>{
         return(
          <li key={item.id}>
            {item.value}
             <button
                 onClick={()=>this.deleteItem(item.id)}
             >
               X
             </button>
             </li>
   )
     })}
     </ul>
    </div>
    </div>
    
  );
}}
export default App;
