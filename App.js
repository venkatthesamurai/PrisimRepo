import React from 'react';
import logo from './images/CC_logo.jpg';
import './App.css';
import Header from './components/Header.jsx'

function App() {
  return (
    <div>
      <div><Header/></div>


<div className='logo_center'>
<img src={logo} alt="burger icon" />

</div>
    </div>
  );
}

export default App;
