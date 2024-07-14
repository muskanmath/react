import './App.css';
// import Abt from './components/Abt';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');
const toggleMode = ()=>{
    if(mode === 'light'){
       setMode('dark');
       document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
}

  return (
   <>
    <Navbar title="Shop"  toggleMode={toggleMode} mode={mode} />
    <div className="container my-3">
    <TextForm heading="Enter the text to analyse" mode={mode}/>
    {/* <Abt/> */}
    </div>

   </>
  );
}

export default App;
