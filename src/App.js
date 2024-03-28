import React from 'react';
import NavBar from './components/NavBar'; // Make sure the path is correct
import Home from './pages/Home'; // Make sure the path is correct
import Footer from './components/Footer'; // Import the Footer component
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes> {/* Use Routes for defining paths */}
          <Route path="/" element={<Home />} />
          {/* Define other routes here */}
        </Routes>
        <Footer /> {/* Add the Footer component here */}
      </div>
    </Router>
  );
}

export default App;
