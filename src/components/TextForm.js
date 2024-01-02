import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = () =>{
       console.log("Uppercase was clicked" +text);
       let newText = text.toUpperCase();
       setText(newText);
  }

  const handleLoClick = () =>{
    console.log("Lowercase was clicked" +text);
    let newText = text.toLowerCase();
    setText(newText);
}

  const handleOnChange = (event) =>{
    console.log("On change");
    setText(event.target.value);
}


const handleLoClear = (event) =>{
  let newText ="";
  setText(newText);
}

  const[text, setText]= useState('');


  
  return (
    <>
    
 
    <div>
        
        <ul></ul>
        <h1>{props.heading}</h1>
        <div class="mb-3" >
        
        <textarea class="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} rows="8" ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick} >Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClear} >Clear Text</button>
   


    </div>
    <ul></ul>
    <div className="mb-3">
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008* text.split(" ").length} Minutes Read</p>
    </div>
 
 
  </>
  )
}
