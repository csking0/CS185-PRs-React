import React, { useState } from 'react';

function Tab(props) {

    var [mouseIsOver, setHover] = useState(false);

    const addstyle = () => {
        if (props.out.id == props.activetab || mouseIsOver) {
            return { backgroundColor: 'rgb(80, 82, 158)' }
        }
        else {
            return { backgroundColor: 'dimgray' }
        }
    };

    return (

        <li 
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style = {addstyle()}
        onClick = {props.ctab.bind(this, props.out.id)}>
            {props.out.title}
        </li>

    );

}

export default Tab;
