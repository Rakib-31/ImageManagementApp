import React from "react";
import "./Navbar.css";


function LandingPage(){
    return (
        <div >
        <img className="background" src="https://d2slcw3kip6qmk.cloudfront.net/marketing/blogs/press/what-is-image-management/temp-header.jpeg"/>
        <br/><br/><br/><br/>
        <h1 className="text-center responsive"><b>Our Services</b></h1><br/><br/>
        <div className="">
        <div className="card-group">
          <div className="card m-4" style={{maxHeight: "230px", maxWidth: "100%"}}>
            <img className="card-img-top" style={{maxHeight: "72%", maxWidth: "100%"}}  src="https://i.ytimg.com/vi/INHYb1RNaMM/maxresdefault.jpg" alt="Card image cap"/>
            <div className="card-body text-center">
              <p className="card-text">Image insertion</p>
            </div>
          </div>
          

          <div className="card m-4" style={{maxHeight: "230px", maxWidth: "100%"}}>
            <img className="card-img-top" style={{maxHeight: "72%", maxWidth: "100%"}}  src="https://kfg6bckb.media.zestyio.com/how-to-request-data-deletion-under-ccpa.d4899f96e1858d7c1e61787a9f72ea96.jpg" alt="Card image cap"/>
            <div className="card-body text-center">
              <p className="card-text">Image deletion</p>
            </div>
          </div>

          <div className="card m-4" style={{maxHeight: "230px", maxWidth: "100%"}}>
            <img className="card-img-top" style={{maxHeight: "72%", maxWidth: "100%"}}  src="https://www.sodapdf.com/blog/wp-content/uploads/2018/06/best-free-photo-editing-software.jpg" alt="Card image cap"/>
            <div className="card-body text-center">
              <p className="card-text">Edit Image</p>
            </div>
          </div>

          <div className="card m-4" style={{maxHeight: "230px", maxWidth: "100%"}}>
            <img className="card-img-top" style={{maxHeight: "72%", maxWidth: "100%"}}  src="https://image.slidesharecdn.com/howtooverlaytextonimagesjpgs-141214122828-conversion-gate01/95/how-to-overlay-text-on-images-5-simple-methods-1-638.jpg?cb=1433017251" alt="Card image cap"/>
            <div className="card-body text-center">
              <p className="card-text">Text on image</p>
            </div>
          </div>
          </div>
          
        </div>
        </div>
    );
}

export default LandingPage;