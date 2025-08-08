import React from 'react'
import loading from './Spinner.gif' 

const Spinner = () =>{
  // functional component for Spinner
    return (
      <div className='text-center'>
        <img src={loading} alt="loading" />
      </div>
    )
}

export default Spinner
