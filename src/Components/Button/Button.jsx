import React from 'react'
import Paragraph from '../Paragraph/Paragraph';
import "./Button.css";

const Button = ({children, background="purple",style={},color="white",fontSize,fontweight,disabled=false,...restprops}) => {
    return (
         
        <button {...restprops} disabled={disabled} className="button" style={{background : disabled ? "lightgrey" : background,color,...style}}>
            <Paragraph style={{textDecoration: disabled  ? "lineThrough" : "none"}} color={disabled ? "black" : color } fontSize={fontSize} fontweight={fontweight}>{children}</Paragraph>
        </button>
        
    )
}

export default Button
