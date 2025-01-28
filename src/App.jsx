// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Coinpage from "./pages/Coinpage.jsx";
import Header from "./components/Header";
import Footer from "./components/Footer/Footer.jsx";

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/coins/:id" element={<Coinpage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;