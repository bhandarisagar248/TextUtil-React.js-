import React from 'react'
import { useState } from "react"
import TextToSpeech from './TextToSpeech';



export default function TextForm(props){

//function to handle copy to clipboard
const [copy,setcopy]=new useState("");

const copytext=async () => {
    try {
      await navigator.clipboard.writeText(copy);
    //   alert("Copied to clipboard!");
    if(!Text){
        props.setalert("Failed ","Please Enter SomeText!","danger");  

    }
    else{

        props.setalert("Success ","Copied to clipboard!","secondary");  
    }

    } catch (err) {
        props.setalert("Error !","Failed to Copy","danger");
      console.error("Failed to copy: ", err);
    }
  };





const UpperCaseHandle=()=>{
// console.log("Upper Case Converter clicked");
SetText(Text.toUpperCase());

if(!Text){
    props.setalert("Failed ","Please Enter SomeText!","danger");  

}
else{

    props.setalert("Success","Converted to UpperCase","primary");
}

}

const LowerCaseHandle=()=>{

    SetText(Text.toLocaleLowerCase());
    if(!Text){
        props.setalert("Failed ","Please Enter SomeText!","danger");  

    }
    else{

        props.setalert("Success","Converted to LowerCase","success");
    }
}

//to clear text when clear button is clicked
const TextClearHandle=()=>{
    SetText("");
    if(!Text){
        props.setalert("Failed ","Please Enter SomeText!","danger");  

    }
    else{

        props.setalert("Success","Cleared Text","success");
    }
}

//to perform inverse text operation
const InverseCaseHandle=()=>{
    var newresult="";

    for(let i=Text.length-1;i>=0;i--){
     
        newresult=newresult+Text[i]; 
    }
    SetText(newresult);
    if(!Text){
        props.setalert("Failed ","Please Enter SomeText!","danger");  

    }

    else{

        props.setalert("Success","Text Inverted","warning");
    }
}


const OnChange=(event)=>{

    // console.log("on change")
    //updating text copy after change in textarea
    setcopy(event.target.value);

SetText(event.target.value);

}

//to download the text 
const HandleFileDownload=()=>{

    const element=document.createElement("a");
    const file=new Blob([Text] ,{type:"text/plain"});
    element.href=URL.createObjectURL(file);
    element.download='myfile.txt';
    document.body.appendChild(element);

    element.click();
        if(!Text){
            props.setalert("Failed ","Please Enter SomeText!","danger");  
    
        }
    
    
        else{
    
            props.setalert("Success","File is Downloading.....","success");
        }

}





    const [Text,SetText]=useState("Enter your text");
// Text="Enter Text"  //wrong way to update state hook
// SetText("Enter Text")  //Correct way to update state hook


//creating an object to store totaL VOWELS and  CONSONANTS
const count={
    vowels:0,
    consonants:0
}

const Vowels=['a','e','i','o','u'];
for(const char of Text){

    if(Vowels.includes(char.toLowerCase())){
        count['vowels']++;
    }
    else{
        count['consonants']++;
    }
}
    
return (
    <>
<div className='container mb-3' style={{display:'flex', gap:'2rem'}}>
    <div className={`bg-${props.mode} text-${props.antimode}`}>
        <h2 className={`mb-0 bg-${props.mode} text-${props.antimode}`} style={{border:`0.5px solid wheat`,textAlign:'center'}}>{props.heading}</h2>
    {/* <label htmlFor="mybox my-3"></label><br></br> */}
    <textarea style={{width:'45vw'}} className={`{mybox ${props.textareamode}`} id="mybox" onChange={OnChange} value={Text} rows="10" cols="80" ></textarea>
</div>

    <div  className={`${props.textareamode}`} style={{border:'1px solid #adb5bd',  width: '45vw'}}>
     <h2 className={`bg-${props.mode} text-${props.antimode}`} style={{border:'0.5px solid wheat',textAlign:'center'}} >Preview</h2>
     <p className={`${props.textareamode}`}>{Text}</p>
     </div>


    </div>

    <button className='btn btn-primary mx-1' onClick={UpperCaseHandle}><i class="bi bi-alphabet-uppercase"style={{marginRight:'5px'}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-alphabet-uppercase" viewBox="0 0 16 16">
  <path d="M1.226 10.88H0l2.056-6.26h1.42l2.047 6.26h-1.29l-.48-1.61H1.707l-.48 1.61ZM2.76 5.818h-.054l-.75 2.532H3.51zm3.217 5.062V4.62h2.56c1.09 0 1.808.582 1.808 1.54 0 .762-.444 1.22-1.05 1.372v.055c.736.074 1.365.587 1.365 1.528 0 1.119-.89 1.766-2.133 1.766zM7.18 5.55v1.675h.8c.812 0 1.171-.308 1.171-.853 0-.51-.328-.822-.898-.822zm0 2.537V9.95h.903c.951 0 1.342-.312 1.342-.909 0-.591-.382-.954-1.095-.954zm5.089-.711v.775c0 1.156.49 1.803 1.347 1.803.705 0 1.163-.454 1.212-1.096H16v.12C15.942 10.173 14.95 11 13.607 11c-1.648 0-2.573-1.073-2.573-2.849v-.78c0-1.775.934-2.871 2.573-2.871 1.347 0 2.34.849 2.393 2.087v.115h-1.172c-.05-.665-.516-1.156-1.212-1.156-.849 0-1.347.67-1.347 1.83"/>
</svg></i>UpperCase</button>

    <button className='btn btn-success mx-1' onClick={LowerCaseHandle}><i class="bi bi-alphabet"style={{marginRight:'5px'}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-alphabet" viewBox="0 0 16 16">
  <path d="M2.204 11.078c.767 0 1.201-.356 1.406-.737h.059V11h1.216V7.519c0-1.314-.947-1.783-2.11-1.783C1.355 5.736.75 6.42.69 7.27h1.216c.064-.323.313-.552.84-.552s.864.249.864.771v.464H2.346C1.145 7.953.5 8.568.5 9.496c0 .977.693 1.582 1.704 1.582m.42-.947c-.44 0-.845-.235-.845-.718 0-.395.269-.684.84-.684h.991v.538c0 .503-.444.864-.986.864m5.593.937c1.216 0 1.948-.869 1.948-2.31v-.702c0-1.44-.727-2.305-1.929-2.305-.742 0-1.328.347-1.499.889h-.063V3.983h-1.29V11h1.27v-.791h.064c.21.532.776.86 1.499.86Zm-.43-1.025c-.66 0-1.113-.518-1.113-1.28V8.12c0-.825.42-1.343 1.098-1.343.684 0 1.075.518 1.075 1.416v.45c0 .888-.386 1.401-1.06 1.401Zm2.834-1.328c0 1.47.87 2.378 2.305 2.378 1.416 0 2.139-.777 2.158-1.763h-1.186c-.06.425-.313.732-.933.732-.66 0-1.05-.512-1.05-1.352v-.625c0-.81.371-1.328 1.045-1.328.635 0 .879.425.918.776h1.187c-.02-.986-.787-1.806-2.14-1.806-1.41 0-2.304.918-2.304 2.338z"/>
</svg></i>LowerCase</button>    
    <button className='btn btn-warning mx-1' onClick={InverseCaseHandle}><i class="bi bi-arrow-counterclockwise" style={{marginRight:'5px'}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2z"/>
  <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466"/>
</svg></i>Inverse Text</button>    

    <button className='btn btn-danger mx-1' onClick={TextClearHandle}><i class="bi bi-trash" style={{marginRight:'5px'}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
</svg></i>Clear Text</button>
   <button className='btn btn-secondary' onClick={copytext}><i className="bi bi-clipboard-check"  style={{marginRight:'5px'}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard-check" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
  <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/>
  <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"/>
</svg></i>Copy ClipBoard</button>

    <button className='btn btn-success mx-1 download_btn' onClick={HandleFileDownload}><i className="bi bi-download " style={{marginRight:8+'px'}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
</svg></i>Download</button>

<div className='container my-3'>
<TextToSpeech Text={Text} Antimode={props.antimode}></TextToSpeech>
    </div>
    

    <div className={`container my-4 bg-${props.mode} text-${props.antimode}` }>
        <h2>Your Text Summary</h2>
     <p> {Text.length} <span>Characters and</span> {Text.split(" ").length} <span>Words</span></p>
     <p>{(0.0042 * Text.split(" ").length).toFixed(4)} minutes for Reading</p>
     <p>Vowels:<span> {count['vowels']}</span> and Consonants: <span>{count['consonants']}</span></p>
{/* 
     <div  className={`${props.textareamode}`} style={{border:'1px solid white'}}>
     <h2 style={{border:'0.5px solid wheat'}}>Preview</h2>
     <p className={`${props.textareamode}`}>{Text}</p>
     </div> */}
    </div>
</>
)


}