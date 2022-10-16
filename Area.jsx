import React, { useState } from 'react'

const Area = (props) => {
  const [text, setText] = useState("enter the text here ")

  const handleOnChange = (e) => {
    setText(e.target.value)
  }
  const click = () => {
    const data = text.toUpperCase()
    setText(data)
    props.showalert("converted to upper case " , "success")

  }
  const click1 = () => {
    const data1 = text.toLowerCase();
    setText(data1)
    props.showalert("converted to lower case " , "success")
  }
  const click2 = () => {
    const click2 = " ";
    setText(click2)
    props.showalert(" text cleared" , "success")
  }
  const click3 = () => {
    const newtex = text.split(/[ ]+/);
    setText(newtex.join(" "))
    props.showalert("spacess removed" , "success")
  }

  return (
    <div style={{color : props.color === `dark` ? `white` : `#042743`}}>

      <h1>{props.heading}</h1>

      <div className="container" >
        <textarea name="text" id="text" onChange={handleOnChange} style={{background : props.color === `dark` ? `grey` : `white`, color : props.color === `dark` ? `white` : `#042743`}}  value={text} cols="30" rows="10"></textarea>
        <button className="btn btn-primary mx-2" onClick={click}>convert to uppercase</button>
        <button className="btn btn-primary " onClick={click1}>convert to lowercase</button>
        <button className='btn btn-primary mx-2' onClick={click2}>clear</button>
        <button className='btn btn-primary' onClick={click3}>Remove spaces</button>

      </div>
      <div className="container">

        <h1>my summary</h1>

        <p>{text.split(" ").length} words and {text.length} charachters</p>
        <p>{0.008 * text.split(" ").length} </p>
        <h2>preview</h2>
        <p>{text}</p>
        
      </div>

    </div>
  )
}

export default Area