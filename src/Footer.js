import React from 'react';

function footer(){
    return (
        <footer className="page-footer ">
        
            <div className="container-fluid text-center" style={{background: "lightseagreen"}}>
            <br/>    
            <div className="row ">
                    <div className="col-md-4 text-center">
                        <h2>ADDRESS</h2>
                        <p>3rd floor, X complex</p>
                        <p style={{marginTop: "-10px"}}>Airport road, Uttara, Dhaka</p>
                    </div>
                    
                    <div className="col-md-4 text-center">
                        <h2>SOCIAL</h2>
                        <p><a href="#"><h3>Linkedin</h3> </a></p>
                        <p style={{marginTop: "-10px"}}><a href="#"><h3>Facebook</h3></a></p>
                    </div>
                    
                    <div className="col-md-4 text-center">
                        <h2>CONTACTS</h2>
                        <p>E-mail: ima@gmail.com</p>
                        <p>Phone: +88-01XXXXXXXXX</p>
                        
                    </div>
                </div>
            </div>
            <div className="footer-copyright text-center py-3" style={{background: "darkcyan"}}>© 2020 Copyright:
                <a href="https://ima.com/"> ima.com</a>
            </div>
        </footer>
    );
}

export default footer;