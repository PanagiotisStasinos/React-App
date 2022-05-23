import Header from './Components/Header';
import Footer from './Components/Footer';
import React from 'react';
import {Route} from "react-router-dom";
import {BrowserRouter as Router} from "react-router-dom";
import {Routes} from "react-router-dom";
import Home from "./Views/Home";
import About from './Views/About';

function App() {
  return (
    <div >
      <Router>
        <Header />

        <div className="p-3">
          <Routes>
            {/* Route new syntax */}
            <Route exact path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
          </Routes>
        </div>

      </Router>
      <Footer />
    </div>
  );
}

export default App;
