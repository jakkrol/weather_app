import React, {useState} from 'react';



function LocationSearcher({ onClick }) {
    var newText = '';

    const handleInputChange = (event) => {
      newText = event.target.value;
      //onTextChange(newText); // Call the callback from App.js
}

const handleDataSender = () => {
  console.log("KLIK");
  onClick(newText); // Call the parent function with the current input value
};

  return (
    <div className='input-group mb-3 search-box'>
        <input type="text" placeholder='Localization' className="form-control" aria-label="Search" onChange={handleInputChange}/>
        <button type='button' className='btn search-button' onClick={handleDataSender}></button>
    </div>
  );
}

export default LocationSearcher;