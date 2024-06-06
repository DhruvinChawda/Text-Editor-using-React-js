import React, { useState } from 'react';

const CaesarCipherComponent = () => {
  const [inputText, setInputText] = useState('');
  const [shift, setShift] = useState(0);
  const [resultText, setResultText] = useState('');

  const encrypt = (text, shift) => {
    return text
      .split('')
      .map(char => {
        if (char.match(/[a-z]/i)) {
          const code = char.charCodeAt(0);
          let shiftedCode = code;
          if (code >= 65 && code <= 90) {
            // Uppercase letters
            shiftedCode = ((code - 65 + shift) % 26) + 65;
          } else if (code >= 97 && code <= 122) {
            // Lowercase letters
            shiftedCode = ((code - 97 + shift) % 26) + 97;
          }
          return String.fromCharCode(shiftedCode);
        }
        return char; // Non-alphabetic characters remain the same
      })
      .join('');
  };

  const handleEncrypt = () => {
    const encryptedText = encrypt(inputText, parseInt(shift, 10));
    setResultText(encryptedText);
  };

  const handleDecrypt = () => {
    const decryptedText = encrypt(inputText, -parseInt(shift, 10));
    setResultText(decryptedText);
  };

  return (
    <div>
      <h1>Caesar Cipher</h1>
      <textarea
        rows="4"
        cols="50"
        placeholder="Enter text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <br />
      <input
        type="number"
        placeholder="Enter shift"
        value={shift}
        onChange={(e) => setShift(e.target.value)}
      />
      <br />
      <button onClick={handleEncrypt}>Encrypt</button>
      <button onClick={handleDecrypt}>Decrypt</button>
      <h2>Result:</h2>
      <p>{resultText}</p>
    </div>
  );
};

export default CaesarCipherComponent;
