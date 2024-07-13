import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchallusers } from './action/user';
import { fetchallquestion } from './action/question';
import Navbar from './component/Navbar/navbar';
import Allroutes from './Allroutes';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  const [slidein, setSlidein] = useState(true); // Corrected variable name setSlidein

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchallusers());
    dispatch(fetchallquestion());
  }, [dispatch]);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setSlidein(false); // Corrected function name setSlidein
    }
  }, []);

  const handleSlidein = () => {
    if (window.innerWidth <= 768) {
      setSlidein((state) => !state); // Corrected syntax for setting state
    }
  };

  return (
    <div className="App">
      <Router>
        <Navbar handleSlidein={handleSlidein} /> {/* Corrected prop name handleSlidein */}
        <Allroutes slidein={slidein} handleSlidein={handleSlidein} /> {/* Corrected prop names slidein and handleSlidein */}
      </Router>
    </div>
  );
}

export default App;