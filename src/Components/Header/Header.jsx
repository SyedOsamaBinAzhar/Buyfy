import React from 'react'
import "./Header.css"

var fontWeightEstimator = (weightStr) => {
  switch (weightStr) {
      case "light":
          return 300; break;
      case "regular":
          return 400; break;    
      case "semiBold":
          return 500; break;
      case "bold":
          return 700; break;
      default: return 400;
          break;
  }
}

const Header = ({children,fontSize = 16, fontweight="bold",style = {},...restProps}) => {
   
   var fontWeightValue = fontWeightEstimator(fontweight)
   var fontSizeValue = fontSize / 10;
    return (
        <div>
            <h1 {...restProps} className="header" style={{fontweight:fontWeightValue, fontSize: `${fontSizeValue}em`,...style}}>{children}</h1>
        </div>
    )
}

export default Header
