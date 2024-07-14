import './App.css';
import Alert from './components/Alert';
// import Abt from './components/Abt';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null)

const showalert = (message , type)=>{
  setalert ({
    msg: message,
    type: type
  })
  setTimeout(() => {
     setalert(null);
  }, 1500);
}

const toggleMode = ()=>{
    if(mode === 'light'){
       setMode('dark');
       document.body.style.backgroundColor = '#042743';
       showalert("Dark mode has been enabled","success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showalert("light mode has been enabled","success")
    }
}

  return (
   <>
    <Navbar title="Shop"  toggleMode={toggleMode} mode={mode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    <TextForm showalert={showalert} heading="Enter the text to analyse" mode={mode}/>
    {/* <Abt/> */}
    </div>

   </>
  );
}

export default App;
