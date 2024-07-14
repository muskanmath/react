import React, {useState} from 'react'

 //used state hook = create state variable
 // text and settext were initialized using used state
 // text = value
 //settext = function to update settext

export default function TextForm(props) {
    const [text, setText] = useState(' ');


    const handleUpClick = ()=>{
    // console.log("uppercase was clicked" + text);
      let newText = text.toUpperCase();
      setText(newText)
      props.showalert("converted to uppercase","success")
    }
    
    const handleLOClick = ()=>{
      // console.log("uppercase was clicked" + text);
      let newText = text.toLowerCase();
      setText(newText)
      props.showalert("converted to lowercase","success")
      }

      const handleClearClick = ()=>{
        // console.log("uppercase was clicked" + text);
        let newText = '';
        setText(newText)
        props.showalert("Text cleared","success")
        }
        
        const handleCopy = ()=>{
          var text = document.getElementById("myBox")
          text.select();
          navigator.clipboard.writeText(text.value);
          props.showalert("copied sucessfully to clipboard","success")
          }

          const handleextraspaces = ()=>{
            let newtext = text.split(/[ ]+/);
            setText(newtext.join(" "))
            props.showalert("spaces handled sucessfully","success")
          }

    const handleOnChange= (event)=>{ 
    // console.log("onchange");
      setText(event.target.value);
    }
    return (
      <>

      <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
          <h1>{props.heading} </h1>
          
        <div className="ab-3">
          <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white' ,  color: props.mode==='dark'?'white':'#042743'}}></textarea>
        </div>

          <button className="btn btn-primary mx-3 my-3" onClick={handleUpClick}>Convert to uppercase</button>
          <button className="btn btn-primary" onClick={handleLOClick}>Convert to lowercase</button>
          <button className="btn btn-primary mx-3" onClick={handleClearClick}>ClearText</button>
          <button className="btn btn-primary mx-3" onClick={handleCopy}>copy text</button>
          <button className="btn btn-primary mx-3" onClick={handleextraspaces}>handleextraspaces</button>
      </div>

            <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
              <h1> Your text summary</h1>
              <p style={{color: props.mode==='dark'?'white':'#042743'}} >{text.split(" ").length} words and {text.length} characters</p>
              <p style={{color: props.mode==='dark'?'white':'#042743'}}>{0.008 * text.split(" ").length} minutes read</p>
              <h2>Preview</h2>
              <p style={{color: props.mode==='dark'?'white':'#042743'}}>{text}</p>
            </div>
    </>
  )
}
