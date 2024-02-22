import React, { useState } from 'react';

function Base64Converter() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleEncode = () => {
    const encodedText = btoa(inputText);
    setOutputText(encodedText);
  };

  const handleDecode = () => {
    const decodedText = atob(inputText);
    setOutputText(decodedText);
  };

  return (
    <div>
      <div>
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter text here..."
          rows={40}
          cols={150}
        />
      </div>
      <div>
        <button onClick={handleEncode}>Base64Encode</button>
        <button onClick={handleDecode}>Base64Decode</button>
      </div>
      <div>
        <textarea
          value={outputText}
          readOnly
          placeholder="Result will appear here..."
          rows={40}
          cols={150}
        />
      </div>
    </div>
  );
}

export default Base64Converter;

