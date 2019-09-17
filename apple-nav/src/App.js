import React from 'react';
import logo from './logo.svg';
import './App.css';

import data from './data'
import NavWrapper from './components/NavWrapper'

function App() {
  return (
    <div className="App">
      <NavWrapper data={data} />
    </div>
  );
}

export default App;
