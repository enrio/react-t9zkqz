import React, { useState } from 'react';
import './style.css';
const translate = require('@vitalets/google-translate-api');

export default function App() {
  const { translatedText, setTranslatedText } = useState('');
  const refInput = React.createRef();

  const handleTranslate = () => {
    const inputText = refInput.current.value.trim();
    if (inputText !== '') {
      translate(inputText, { to: 'en' })
        .then(res => {
          console.log(res.text);
          //=> I speak English
          console.log(res.from.language.iso);
          //=> nl
          setTranslatedText(res.text);
        })
        .catch(err => {
          console.error(err);
        });
    }
  };

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <input ref={refInput} />
      <button onClick={handleTranslate}>Translate</button>
      <p />
    </div>
  );
}
