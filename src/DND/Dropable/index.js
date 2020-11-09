import React from 'react';
import PropTypes from 'prop-types';

export default function Dragable(props) {

    function drag(e) {
        console.log(e.target.id);
        //e.preventDefault();
        e.dataTransfer.setData('transfer', e.target.id);
        //e.target.appendChild(document.getElementById(data));
    }

    function noAllowDrag(e) {
        console.log(e);
        e.stopPropagation();
    }

    return(
        <div id={props.id} draggable="true" onDragStart={drag} onDragOver={noAllowDrag} style={props.style}>
            <h1>{props.children}</h1>
        </div>
    );
}
Dragable.propTypes = {
    id: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node
}