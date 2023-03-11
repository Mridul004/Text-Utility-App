import './App.css';
import Navbar from './Components/Navbar';
import TextFrom from './Components/TextFrom';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

function App() {
  return (
    <>
     <Navbar title=""/>
     <div className="container my-3">
     <TextFrom heading="Enter the text"></TextFrom>
     </div>
    </>
  );
}

export default App;
