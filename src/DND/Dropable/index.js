import React from 'react';
import PropTypes from 'prop-types';

export default function Dragable(props) {

    function drag(e) {
        //e.preventDefault();
        e.dataTransfer.setData('transfer', e.target.id);
        //e.target.appendChild(document.getElementById(data));
    }

    function noAllowDrag(e) {
        e.stopPropagation();
    }

    return(
        <div id={props.id} draggable="true" onDragStart={drag} onDragOver={noAllowDrag} style={props.style}>
            {props.children}
        </div>
    );
}
Dragable.propTypes = {
    id: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node
}