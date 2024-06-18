import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Warning from './components/Warning';
import Explanation from './components/Explanation';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/warning" element={<Warning />} />
        <Route path="/explanation" element={<Explanation />} />
        <Route path="/" element={<Warning />} />
      </Routes>
    </Router>
  );
};

export default App;
