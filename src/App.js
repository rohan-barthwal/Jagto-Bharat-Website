import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Slider from './components/Slider';
import Footer from './components/Footer';
import Download from './components/Download';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/download' element={<Download />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
