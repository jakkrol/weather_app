import React, {useEffect, useState} from 'react';


var newText = '';

function LocationSearcher({ onClick }) {

  const handleInputChange = (event) => {
    newText = event.target.value;
  }
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleDataSender();
    }
  };

  // useEffect(()=>{
  //   window.addEventListener("keydown", handleKeyPress);
  // })

  const handleDataSender = () => {
    onClick(newText); // Call the parent function with the current input value
  };

  return (
    <div className='input-group mb-3 search-box'>
        <input type="text" placeholder='Localization' className="form-control" aria-label="Search" onChange={handleInputChange} onKeyDown={handleKeyPress}/>
        <button type='button' className='btn search-button' onClick={handleDataSender}></button>
    </div>
  );

}

export default LocationSearcher;