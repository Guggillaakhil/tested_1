import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Counter from './pages/Counter';
import DarkBackground from './pages/DarkBackground';
import ChangeTheme from './pages/ChangeTheme';
import NavBar from './NavBar';
import Home from './src/Home.jsx'; // ✅ Corrected import path
import data from './src/assets/Data/data.js'; // ✅ Ensure correct export from data.js

const App = () => {
  const [item, setItem] = useState(data);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/Home" element={<Home data={item} />} />
        <Route path="/counter" element={<Counter />} /> {/* ✅ Lowercase route */}
        <Route path="/darkbackground" element={<DarkBackground />} />
        <Route path="/changetheme" element={<ChangeTheme />} />
      </Routes>
    </Router>
  );
};

export default App;




