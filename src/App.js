import Header from './Components/Header';
import Footer from './Components/Footer';
import React from 'react';
import {Route} from "react-router-dom";
import {BrowserRouter as Router} from "react-router-dom";
import {Routes} from "react-router-dom";
import Home from "./Views/Home";
import About from './Views/About';
import Products from './Views/Products';
import Product from './Views/Product';
import TTest from './Views/TTest';
import Image from './Views/Image';

function App() {
  return (
    <div className='relative pb-10 min-h-screen'>
      <Router>
        <Header />

        <div className="p-3">
          <Routes>
            {/* Route new syntax */}
            <Route exact path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/product/:id" element={<Product/>}/>
            <Route path="/test" element={<TTest/>}/>

            
            <Route path="/image" element={<Image/>}/>
          </Routes>
        </div>

      </Router>
      <Footer />
    </div>
  );
}

export default App;
