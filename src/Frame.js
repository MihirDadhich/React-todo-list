import React, {  useState } from 'react'

import './FrameCss.css'


export default function Frame (props) {
  const[inputtext,setinputtext]=useState('');

  

  return (
    <div className='container'>

     <div className='title'>
         TODO-LIST
     </div>
     <div className='div'>
     <br/>
        <input type='text' value={inputtext} onChange={e=>{
         setinputtext(e.target.value) 
        }}></input> 
        <button class='add' onClick={()=>{
          if(inputtext!==""){
          props.addlist(inputtext);
          setinputtext('');}
        }} >+</button>
        
        <div class="ff">{inputtext}</div>
      
       



      
     </div>
     


    </div>



    

 

  )
}
