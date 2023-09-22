
import { useState } from 'react';
import './App.css';
import Frame from './Frame';
import TodoList from './TodoList';
import TodoListComp from './TodoListComp';


function App() {
  const [list,setlist]=useState([]);
  const[completedlist,newcompletedlist]=useState([]);
console.log(list);
 
let addlist=(inputtext)=>{
  setlist([...list,inputtext]);
  }

  const deleteListItem=(key)=>{
     let newlist=[...list];
     newlist.splice(key,1);
     setlist([...newlist]);

  }

  const deleteCompListItem=(key)=>{
    let newlist=[...completedlist];
    newlist.splice(key,1);
    newcompletedlist([...newlist]);

 }


  const  check=(key)=>{
    let newlist=[...list];
    let x=newlist.splice(key,1);
    setlist([...newlist]);
 addComp(x);
  }
  let addComp=(x)=>{


    newcompletedlist([...completedlist,x]);
 
  }
  console.log(completedlist)


  return (
    <div className="App">
      
        
        <Frame  addlist={addlist}/>
      
         <h1>Task Todo</h1>

        {list.map((listItem,i)=>{
          return(
             <TodoList  key={i} index={i} item={listItem} deleteItem={deleteListItem} check={check}/>)
        })}
        
        <h1>Task Completed</h1>
        {completedlist.map((listItem,i)=>{
          return(
             <TodoListComp  key={i} index={i} item={listItem} deleteItem={deleteCompListItem} check={check}/>)
        })}
        
      
    </div>
  );
}

export default App;
