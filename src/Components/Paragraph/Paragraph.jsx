import React from 'react'
import "./Paragraph.css"

var fontWeightEstimator = (weightStr) => {
  switch (weightStr) {
      case "light":
          return 300; break;
      case "regular":
          return 400; break;    
      case "semiBold":
          return 600; break;
      case "bold":
          return 700; break;
      default: return 400;
          break;
  }
}

const Paragraph = ({children,fontSize = 16, fontweight="regular",style = {},color="black", ...restProps}) => {
   
   var fontWeightValue = fontWeightEstimator(fontweight)
   var fontSizeValue = fontSize / 10;
   
    return (
        <div {...restProps}>
            
            <h1 className="paragraph" style={{fontweight:fontWeightValue, fontSize: `${fontSizeValue}em`,...style}}>{children}</h1>
        </div>
    )
}

export default Paragraph 
