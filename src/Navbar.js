import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './Navbar.css'


function Navbar() {

    function myFunction() {
        const x = document.getElementById('myTopnav');
        console.log(x.className);
        if (x.className === 'topnav') {
          x.className += ' responsive';
        } else {
          x.className = 'topnav';
        }
      }
    

    return (
        <nav >
        <div className="topnav" id="myTopnav">
            <div className="container">
                <a  href="#" style={{fontSize: "25px"}}>IMA</a>

                        <a style={{marginTop: "7px", marginLeft: "10%"}} className="design"  href="#">Home</a>

                        <a style={{marginTop: "7px"}} className="design" href="#">Feature</a>

                        <a style={{marginTop: "7px"}} className="design" href="#">Services</a>

                        <a style={{marginTop: "7px"}} className="design" href="#">About Us</a>

                        <a style={{marginTop: "7px"}} className="design" href="#">Help</a>

                        <Link style={{marginTop: "7px"}} className="design" to="/imageform">Create Image</Link>

                        <Link style={{marginTop: "7px"}} className="design" to="/tshirt">T-Shirt</Link>

                        <a style={{marginTop: "7px"}} className="design ml-auto" href="#">Register</a>

                        <a style={{marginTop: "7px"}} className="design " href="#">Login</a>

                        <a style={{marginTop: "15px"}} href="javascript:void(0)" className="icon" onClick={myFunction}>
                        <span class="material-icons">
                        list
                        </span>
                        </a>

                </div>
            </div>
        </nav>
    );
}
export default Navbar;