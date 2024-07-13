import './App.css';
import Abt from './components/Abt';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
   <>
    <Navbar title="Shop" aboutText="About Shop"/>
    <div className="container my-3">
    <TextForm heading="Enter the text to analyse"/>
    <Abt/>
    </div>

   </>
  );
}

export default App;
