import React, {useState, useEffect} from 'react';
import Modal from 'react-modal';
import Dragable from './DND/Dropable/index';
import PropTypes from 'prop-types';

const modalCustomStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

// const customStyle = {
//     top: '50%',
//     left: '50%',
//     position: 'absolute'
// }

export default function Tshirt(){

    const [textOnShirt, textSetter] = useState('');
    const [right, setRight] = useState(42);
    const [up, setUp] = useState(35);

    const [customStyle, setCustomStyle] = useState({top: up + '%',left: right + '%',position: 'absolute'})
    // const [textMessage, textManage] = useState('');
    const [modalIsOpen,setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(!modalIsOpen);
    }

    // function drop(e) {
    //     console.log(e.target.id);
    //     e.preventDefault();
    //     const data = e.dataTransfer.setData('transfer', e.target.id);
    //     e.target.appendChild(document.getElementById(data));
    // }

    // function allowDrop(e) {
    //     e.stopPropagation();
    // }

    const textHandler = e => {
        console.log(e.target.value);
        textSetter(text => e.target.value);
    }

    useEffect(()=>{
        const condition = {
            top: up + '%',left: right + '%',position: 'absolute'
        }
        setCustomStyle(condition);
    }, [right, up]);

    const shiftPositionRight = () => {
        setRight(val => val + 1);
    }

    const shiftPositionLeft = () => {
        setRight(val => val - 1);
    }

    const shiftPositionUp = () => {
        setUp(val => val - 1);
    }

    const shiftPositionDown = () => {
        setUp(val => val + 1);
    }

    function renderText() {
        console.log('text');
        if(textOnShirt){
            return (<div  style={customStyle}>
                        <div className="center">
                            <div style={{ marginBottom: "10%", cursor: "pointer"}} onClick={shiftPositionUp}>
                                <span className="material-icons">
                                    keyboard_arrow_up
                                </span>
                            </div>
                            <div style={{display: "inline-block", marginBottom: "10%", cursor: "pointer"}} onClick={shiftPositionLeft}>
                                <span className="material-icons">
                                    keyboard_arrow_left
                                </span>
                            </div>
                            <h1 className="ml-4" style={{display: "inline-block"}}>{textOnShirt}</h1>
                            <div className="ml-4" style={{display: "inline-block", marginBottom: "10%", cursor: "pointer"}} onClick={shiftPositionRight}>
                                <span className="material-icons">
                                    keyboard_arrow_right
                                </span>
                            </div>
                            <div style={{ marginBottom: "10%", cursor: "pointer"}} onClick={shiftPositionDown}>
                                <span class="material-icons">
                                    keyboard_arrow_down
                                </span>
                            </div>
                        </div>
                    </div>)
        }
        return '';
    }
    
    return(
        <div className="container text-center" style={{marginTop: "8%"}}>
            {renderText()}
            <img style={{height: "20rem", width: "15rem"}} src="https://5.imimg.com/data5/LO/LB/MY-20023574/t-shirt-500x500.jpg"/><br/><br/>
            
            <button className="btn btn-success" onClick={openModal}>Add Text</button>
            
            <Modal
                isOpen={modalIsOpen}
                
                style={modalCustomStyles}
                contentLabel="Example Modal"
                
            >
                <div className="text-center">
                    <input onChange={textHandler} value={textOnShirt}/><br/><br/>
                    <button className="btn btn-success" onClick={openModal}>Submit</button>
                </div>
                
            </Modal>

            <br/><br/><br/><br/><br/><br/>
        
        </div>
    );
}

// Tshirt.propTypes = {
//     id: PropTypes.string,
//     style: PropTypes.object,
//     children: PropTypes.node
// }