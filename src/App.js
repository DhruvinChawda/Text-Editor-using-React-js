import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Counter from './components/Counter';
import Cipher from './components/Cipher';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
<>
<Router>    
<Navbar title="counter"/>

{/* <div className="container my-3">
<Routes>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/cipher">
            <Cipher />
          </Route>
          <Route path="/">
            <Textform />
          </Route>
  </Routes> this syntax is for react router V5 and below for V6 use below syntax
</div> */}
<div className="container my-3">
          <Routes>
            <Route path="/" element={<Textform />} />  {/* Home route for Textform */}
            <Route path="/about" element={<About />} />
            <Route path="/cipher" element={<Cipher />} />
            <Route path="/Counter" element={<Counter />} />
          </Routes>
        </div>
</Router>
</>
);
}

export default App;
