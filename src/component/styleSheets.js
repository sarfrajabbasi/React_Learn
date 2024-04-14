import React from 'react'
import "./style/heading.css"
function StyleSheets(props) {
    let className = props.primary? "primary":"";
    
  return (
    <div className='container'>
        <h1 className={`${className} font-xl`}>StyleSheets</h1>
    </div>
  )
}

export default StyleSheets