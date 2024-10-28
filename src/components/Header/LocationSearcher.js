import React from 'react';

function LocationSearcher({ onTextChange }) {
  const handleInputChange = (event) => {
    const newText = event.target.value;
    onTextChange(newText); // Call the callback from App.js
  };

  return (
    <div className="input-group input-group-sm mb-3">
    {/* <div class="input-group-prepend">
        <span class="input-group-text" id="inputGroup-sizing-sm">Localization</span>
    </div> */}
    <input type="text" placeholder='Localization' className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"
        onChange={handleInputChange}
      />
    </div>
  );
}

export default LocationSearcher;