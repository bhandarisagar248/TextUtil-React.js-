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
        Accordion Item #1
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className={`accordion-collapse collapse show bg-${props.mode} text-${props.antimode}`}>
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={style}>
    <h2 className="accordion-header" style={style}>
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className={`accordion-collapse collapse bg-${props.mode} text-${props.antimode}`}>
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={style}>
    <h2 className="accordion-header" style={style}>
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" className={`accordion-collapse collapse bg-${props.mode} text-${props.antimode}`}>
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>

</div>






</>
);


}