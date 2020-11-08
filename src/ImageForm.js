import React, { useState, useEffect } from 'react';
import MultiImageInput from 'react-multiple-image-input';
import './style.css';

export default function ImageForm(){
     
      const [images, setImages] = useState([]);
      
      
      const imageHandler = e => {
          //console.log(e.target.files);
          if(e.target.files){
              const fileArray = Array.from(e.target.files).map(file => URL.createObjectURL(file));
              console.log(fileArray);
              setImages(prevImages => prevImages.concat(fileArray));
          }
      }

      const removeImage = e => {
        const newArray = Array.from(images).filter((file,index) => index !== e);
        console.log(newArray);
        setImages(newArray);
        console.log(images);
    }

      const renderImage = (source) => {
          return source.map((photo,index) => {
              return <div class="card mr-4">
                        <div className="card-img-top">
                            <img src={photo} key={photo}/>
                        </div>
                        <div class="card-footer text-center">
                            <button onClick={() => removeImage(index)}>Remove</button>
                        </div>
                    </div>
          });
      }

     
      return (
        <div>
            <h1 className="text-center mt-4">React multiple Image preview</h1>
            <div>
                <input type="file" id="file" multiple onChange={imageHandler}/>
                <div className="label-holder">
                    <label className="label" htmlFor="file">
                        <i className="material-icons">add_a_photo</i>
                    </label>
                </div>
                <div className="result container mt-4">
                    {renderImage(images)}
                </div>
            </div>
        </div>
      );
}