import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!", "success");
    }

    const handleLowClick = () => {
        // console.log("Uppercase was clicked"+ text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!", "success");
    }

    const handleClearClick = () => {
        // console.log("Uppercase was clicked"+ text);
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }

    const handleOnChange = (event) => {
        // console.log("On chnage");
        setText(event.target.value);
    }

    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Removed!", "success");
    }

    const [text, setText] = useState("");

    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#141526' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{
                        backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
                        color: props.mode === 'dark' ? 'white' : '#141526'
                    }} id="myBox" rows="11"></textarea>
                </div>
                <button className="btn btn-outline-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-outline-warning mx-2 " onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-outline-danger mx-2 " onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-outline-info mx-2 " onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-outline-success mx-2 " onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>

            <div className='container my-3' style={{ color: props.mode === 'dark' ? 'white' : '#141526' }}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes to read(average)</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter something in the textbox above to preview it here."}</p>
            </div>
        </>
    )
}
