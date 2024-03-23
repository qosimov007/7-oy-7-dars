import { useState } from 'react'
import './App.css'

import './index.css'

function App() {
 
  const [newItem, setNewItem]= useState('');
   const[items, setItems] = useState([]);

 
   


function AddItem(){

  if(!newItem){
    alert("Enter task...")
    return;
  }


 
  let item = {
    id: Math.floor(Math.random() * 10),
    value:newItem
  };

  setItems( oldList=>[...oldList, item]);
  
  setNewItem('');
 
}

function deleteItem(id){
 const newArray = items.filter(item => item.id !== id);
 setItems(newArray); 
}
    

  return (
    <>
  
     <div className="container">
   <div className="todo-wrapper">
    
   <div className="Side-bar">
     
    </div>
     <div className="block">
      
      <h1>Barcha vazifalar</h1>
      <input className='input' onChange={e => setNewItem(e.target.value)} value={newItem} type="text" placeholder='Add a new task insdie'/>
  <button id='button' onClick={()=> AddItem()}>Qo'shish</button>
    <div className="table">
      <ul>
        
        {items.map(item =>{
        return(
          <li key={item.id}>{item.value} 
          
           <button onClick={() => deleteItem(item.id)}>
            <img width="20px" src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/red-trash-can-icon.png" alt="" />
           </button>
           </li>
        )
        }) }
        
       
      </ul>
    </div>
     </div>
   </div>
     </div>


    </>
  )
}

export default App;


