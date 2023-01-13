import React from 'react';
import CurrencyRow from './CurrencyRow';
import '../assets/App.css';

function App() {
  return (
    <>
      <h1>Quick Currency Converter</h1>
      <CurrencyRow />
      <p>Is Equal To</p>
      <CurrencyRow />
    </>
  );
}

export default App;
