import React, {useState} from 'react'

export default function TextForm(props) {
    let handleOnChange = (event)=>{
        setText(event.target.value)
    }
    let handleUperCase = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
    }
    let handleLowerCase = ()=>{
        let newText = text.toLowerCase()
        setText(newText)
    }
    let reverseWord = ()=>{
        let newText = text.split(" ").map(word => word.split("").reverse().join("")).join(" ")
        setText(newText)
    }

    const [text, setText] = useState("Enter text here.")

  return (
    <>
        <div className='container'>
            <h1 style={{color:props.mode ==='dark'?'white':'black'}}>{props.heading}</h1>
            <div className={`mb-3`}>
                <textarea className={`form-control`} style={{backgroundColor:props.mode ==='dark'?'grey':'white', color:props.mode ==='dark'?'white':'black'}} value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
            </div>
            <button className='btn btn-primary mx-2' onClick={handleUperCase}> Convert to Uppercase</button> 
            <button className='btn btn-primary mx-2' onClick={handleLowerCase}> Convert to Lowercase</button>
            <button className='btn btn-primary mx-2' onClick={reverseWord}> Reverse on word Basis</button>
        </div>
        <div className={`container mb-3 text-${props.mode ==='light'?'dark':'light'}`}>
            <h1>Your text Summary</h1>
            <p>{text.split(' ').filter((val)=>{return val.length>0}).length} words and {text.length} characters.</p>
            <p> {0.008 * text.split(' ').filter((val)=>{return val.length>0}).length} Minutes Read</p>

            <h2>Preview</h2>
            <p>{text}</p>
        </div>

    </>
  )
}
