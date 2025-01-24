import React from 'react';

import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './components/core/Auth/SignUp';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import PageNotFound from './pages/PageNotFound';
import Dashboard from './pages/Dashboard';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/dash" element={<Dashboard />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
