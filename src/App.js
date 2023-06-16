import logo from './logo.svg';
import './App.css';
import Nav from './components/nav';
import Home from './components/Home';
import Collection from './components/Collection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import First from './components/First';
import All from './components/All';
import Subed from './components/Subscribed';
function App() {
  return (
    <div className="App">


        <BrowserRouter>
      <Routes>
        
          <Route index element={<First />} />
          <Route path="/all" element={<All/>} />
          <Route path="/subed" element={<Subed/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
