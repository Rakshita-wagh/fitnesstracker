import React from 'react';
import './CreateUsers.component.css';

const  CreateUsers = ()=>{
    return (
       <div className='form'>
      Name: <input type='text'  placeholder='Name'/> <br/> <br/>
       Age: <input type='number'  placeholder='Age'/> <br/>
        <button className='button'>Submit</button>
        <input type='date'/>
       </div>
    )
}


export default CreateUsers