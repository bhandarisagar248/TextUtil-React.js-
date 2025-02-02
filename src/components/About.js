import React, { useState } from 'react'

export default function About(props){


    //declearing usestate for light and dark mode button
    const [BtnDark,BtnLight]=new useState('btn btn-dark')

    //declearing style usestate
    const [style,SetStyle]=new useState(  {
        color:'black',
        backgroundColor:'white'
       });
  


    //declearing states
const [Dark,Light]=useState("Dark");



const DarkMode=()=>{
    if(Dark.includes("Dark")){

        SetStyle({
            color:'white',
            backgroundColor:'black'
        })
//updating button color
BtnLight("btn btn-light");

        Light("Light");

    }

    else{

        
        SetStyle({
            color:'black',
            backgroundColor:'white'
        })

        //updating button color using state
       BtnLight("btn btn-dark");

        Light("Dark");

    }

    console.log("Dark Mode Enabled");
}

return (
<>
<div className='container my-4'>
    <h1 className={`my-3 bg-${props.mode} text-${props.antimode}`}>About Us</h1>
<div className="accordion" style={style} id="accordionPanelsStayOpenExample">
  <div className="accordion-item" style={style}>
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        Free to Use
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className={`accordion-collapse collapse show bg-${props.mode} text-${props.antimode}`}>
      <div className="accordion-body">
        <strong>TextUtil is completely free with no hidden charges.</strong> Users can edit and analyze text without needing a <code>Subscription </code>, or payment.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={style}>
    <h2 className="accordion-header" style={style}>
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
      Analyze Your Text
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className={`accordion-collapse collapse bg-${props.mode} text-${props.antimode}`}>
      <div className="accordion-body">
        <strong>Word & Character Counter:</strong> Instantly count words, characters (with/without spaces), sentences, and paragraphs. <code>Readability Score: </code>Analyze how easy your text is to read based on Flesch-Kincaid or other readability formulas.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={style}>
    <h2 className="accordion-header" style={style}>
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
      Browser Compatibility
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" className={`accordion-collapse collapse bg-${props.mode} text-${props.antimode}`}>
      <div className="accordion-body">
        <strong>Works seamlessly across different web browsers like </strong><code> Chrome, Firefox, Edge, and Safari.</code> Fully responsive, so it adapts well to mobile, tablet, and desktop screens. <code>.No installation required—</code> works directly in the browser without needing any downloads.
      </div>
    </div>
  </div>
</div>

</div>






</>
);


}