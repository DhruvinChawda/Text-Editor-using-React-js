import React from 'react'
import { useState } from 'react'

export default function Textform(props) {
  
  const handleclick=()=>{
    console.log("Uppercase was clicked")
    let newtext = text.toUpperCase();
    setText(newtext)
  }
  const handleonchange=(event)=>{
    console.log("onchange was clicked")
    setText(event.target.value)
  }

  const handleclick2=()=>{
    console.log("Lowercase was clicked")
    let newtext = text.toLowerCase();
    setText(newtext)
  }

  const clear=()=>{
    console.log("Clear was clicked")
    let newtext = ""
    setText(newtext)
  }

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }

  const reverse=()=>{
    console.log("Reverse was clicked")
    let newtext = text.split("").reverse().join("")
    setText(newtext)
  }

  const bold=()=>{
    console.log("Bold was clicked")
    let newtext = text.bold()
    setText(newtext)
  }

  const [text, setText] = useState('')
  //const[text1,setText1] = useState('')
  return (
<>    
<div className='container'> 
    <h1>{props.heading}</h1>
<div className="mb-3">
  <label for="myBox" class="form-label">TEXTBOX : ENTER YOUR TEXT HERE</label>
  
  {/* Idhar value me text aaya aur handleonchange method se likh na horaa box me */}
  <textarea className="form-control" value={text} id="myBox" rows="8" onChange={handleonchange}></textarea>
</div>
<button className="btn btn-primary my-2 mx-2" onClick={handleclick}>convert to uppercase</button>
<button className="btn btn-primary my-2 mx-2" onClick={handleclick2}>convert to lowercase</button>
<button className='btn btn-primary my-2 mx-2' onClick={clear}>Clear text</button>
<button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
<button className="btn btn-primary my-2 mx-2" onClick={bold}>Bold</button>
<button className="btn btn-primary my-2 mx-2">Translate to Hindi</button>
<button className="btn btn-primary my-2 mx-2" onClick={reverse}>Reverse message</button>
</div> 

<div className="container my-3">
  <h1>TEXT SUMMARY</h1>
  <p>{text.split(" ").length} words & {text.length}characters</p>
  <h2>Preview</h2>
  <p>{text}</p>

</div>
</>  
  )
}
