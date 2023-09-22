import React from 'react'

function TodoListComp(props) {
  return (
    < >
    <div class='conatainer2'>
    <div class="line"></div>
    <div class='bor'>
     <li class='li'>{props.item} 

     {/* <button class='check' onClick={(e)=>{props.check(props.index)}}>O</button> */}
     
     <button class="delete" onClick={(e)=>{props.deleteItem(props.index)} }>X</button></li>
     
     </div>
     
     </div>
    </>
  )
}

export default TodoListComp