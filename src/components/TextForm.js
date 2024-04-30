import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert(" Converted to Upeercase!", "success")
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert(" Converted to Lowercase!", "success")
    }
    const handleClClick = () => {
        let newText = ""
        setText(newText)
        props.showAlert(" Text Cleared!", "success")
    }
    const handleCopy = () => {
        var text = document.getElementById("myBox")
        text.select();
        text.setSelectionRange(0 , 9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert(" Copied to clipboard", "success")
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert(" Extra spaces removed", "success")
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState();
    return (
        <>
            <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style = {{backgroundColor : props.mode === 'dark' ? 'grey' : 'white' , color: props.mode === 'dark' ? 'white' : 'black'}}id="myBox" rows="8"></textarea>
                </div>
                <button /*disabled={text.length===0}*/ className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert To Uppercase</button>
                <button /*disabled={text.length===0}*/ className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert To Lowercase</button>
                <button /*disabled={text.length===0}*/className="btn btn-primary mx-1 my-1" onClick={handleClClick}>Clear</button>
                <button /*disabled={text.length===0}*/ className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button /*disabled={text.length===0}*/ className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            </div>
            <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
                <h1>Your Word Summary</h1>
                {/* <p>{text.split("/\s+/").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p> */}
                <h2>Preview</h2>
                <p>{/*text.length > 0?text : "Nothing to preview here"*/ text}</p>
            </div> 
        </>
    )
}
