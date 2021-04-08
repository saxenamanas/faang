import React from 'react'
import './Button.scss';




function Button(props) {

    function Gradient(){
        return (
            <button  className="btn-grad">
                {props.text}
            </button>
        )
    }

    function Normal(){
        return (
            <button className="btn">
                {props.text}
            </button>
        )
    }
    if(props.type==="gradient"){
        return <Gradient></Gradient>;
    }
    return <Normal></Normal>;
}

export default Button
