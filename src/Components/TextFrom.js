import React ,{useState} from 'react'
export default function TextFrom(props) {
    const handleUpClick=()=>{
        console.log("Button was clicked");
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handleLowClick=()=>{
        let newText=text.toLowerCase();
        setText(newText)
    }
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    const [text,setText]=useState("Enter text here : ")
    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>      
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="12"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert Text to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert Text to Lowercase</button>
    </div>
    <div className="container">
        <p>Your Text has {text.length} words and {text.split(" ").length} words</p>
    </div>
    </>
  )
}
