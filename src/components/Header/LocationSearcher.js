import React, {useEffect, useState} from 'react';


var newText = '';

function LocationSearcher({ callback }) {

  const handleInputChange = (event) => {
    newText = event.target.value;
  }
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      callback(newText.replace(/\s+/g, ' ').trim());
      //handleDataSender();
    }
  };

  // useEffect(()=>{
  //   window.addEventListener("keydown", handleKeyPress);
  // })

  // const handleDataSender = () => {
  //   onClick(newText); // Call the parent function with the current input value
  // };

  return (
    <div className='container header'>
      <div className='col-12'>
        <div className='input-group mb-3 search-box'>
          <input type="text" placeholder='Localization' className="form-control" aria-label="Search" onChange={handleInputChange} onKeyDown={handleKeyDown}/>
          <button type='button' className='btn search-button' onClick={()=>callback(newText)}></button>
        </div>
      </div>
    </div>
  );

}

export default LocationSearcher;