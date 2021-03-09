import React from 'react'
import Paragraph from '../Paragraph/Paragraph';
import "./Button.css";

const Button = ({children, background="purple",style={},color="white",fontSize,fontweight,...restprops}) => {
    return (
         
        <button {...restprops} className="button" style={{background,color,...style}}>
            <Paragraph color fontSize={fontSize} fontweight={fontweight}>{children}</Paragraph>
        </button>
        
    )
}

export default Button
