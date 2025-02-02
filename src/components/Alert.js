import React from "react"
import { useState } from "react"

const Alert=(props)=>{


  //to handle null valu from alert 
  if(!props.alert){
    return null;
    //if alert is null then directly return null 
  }


return(
    
   (<div class={`alert alert-${props.alert['color'].toLowerCase()} alert-dismissible fade show`} role="alert">
  <strong>{props.alert['type']}</strong> {props.alert['msg']}
  {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
</div>)
    );
}

export default Alert;