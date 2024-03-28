import React from 'react';
import NavBar from './components/NavBar'; // Make sure the path is correct
import Home from './pages/Home'; // Make sure the path is correct
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/" element={<Home />} /> {/* Update Route syntax for version 6 */}
          {/* Define other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
