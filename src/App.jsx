import React from "react";
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import ProductCardList from "./Day4/ProductCardList";
import Navbar from "./Day4/NavBar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App(){
  return(
    <Router>
      <Navbar/>
      <div className="bg-gray-100 min-h-screen p-6">
        <Routes>
          <Route path = "/" element = {<Home />}/>
          <Route path = "/about" element = {<About />}/>
          <Route path = "/contact" element = {<Contact />}/>
          <Route 
            path="/products" 
            element={
              <>
                <h1 className="text-3xl font-bold text-center mb-8">Product Card List</h1>
                <ProductCardList />
              </>
            } 
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App;