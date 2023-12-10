import React from 'react';
import './CreateUsers.component.css';

const  CreateUsers = ()=>{
    return (
       <div >
       <input type='text' className='form' placeholder='Name'/> <br/>
        <input type='number' className='form' placeholder='Age'/> <br/>
        <button className='button'>Submit</button>
       </div>
    )
}


export default CreateUsers