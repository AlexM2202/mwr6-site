import logo from './logo.svg';
import './App.css';
import CustomNavbar from './navbar/navbar';
import header_img from './small_header.png';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Media from './pages/Media.js';
import FAQ from './pages/FAQ.js';

function App() {
  return (
    <div className="App">
      <img src={header_img} width="100%" />
      <CustomNavbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/media" element={<Media />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
