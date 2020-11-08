import React, {useState} from 'react';
import Modal from 'react-modal';
import Dragable from './DND/Dropable/index';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

const customStyle = {
    top: '50%',
    left: '50%',
    position: 'absolute'
}

export default function Tshirt(){

    const [textOnShirt, textSetter] = useState('');
    // const [textMessage, textManage] = useState('');
    const [modalIsOpen,setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(!modalIsOpen);
    }

    const textHandler = e => {
        console.log(e.target.value);
        textSetter(text => e.target.value);
    }
    
    return(
        <div className="container text-center" style={{marginTop: "8%"}}>
            <img style={{height: "20rem", width: "15rem"}} src="https://5.imimg.com/data5/LO/LB/MY-20023574/t-shirt-500x500.jpg"/><br/><br/>
            <Dragable children = {textOnShirt} style={customStyle}/>
            <button className="btn btn-success" onClick={openModal}>Add Text</button>
            <Modal
                isOpen={modalIsOpen}
                
                style={customStyles}
                contentLabel="Example Modal"
                
            >
                <div className="text-center">
                    <input onChange={textHandler} value={textOnShirt}/><br/><br/>
                    <button className="btn btn-success" onClick={openModal}>Submit</button>
                </div>
            </Modal>
        
        </div>
    );
}