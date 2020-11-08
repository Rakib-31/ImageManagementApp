import React, {useState} from "react";
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer'
import './Navbar.css';
import LandingPage from './LandingPage';
import ImageForm from './ImageForm';
import Tshirt from './Tshirt';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
      
      <BrowserRouter>
        <div>
          <Navbar/>
          <switch>
            <Route path="/" exact component={LandingPage}/>
            <Route path="/imageform" exact component={ImageForm}/>
            <Route path="/tshirt" exact component={Tshirt}/>
          </switch>
          <br/><br/><br/><br/>

          <Footer/>
        
        </div>
      </BrowserRouter>
  );
}

export default App;
