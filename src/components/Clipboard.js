import React from "react";
import { useState } from "react";

import copy from 'copy-to-clipboard';



const Clipboard=()=>{
    
 const [copytext,setcopytext]=  new useState("");

 const HandleCopyText=(e)=>{
    setcopytext(e.target.value);
 };
 const CopyToClipBoard=()=>{
    copy(copytext);
    alert("Copied to Clipboard");
 };
};

export default Clipboard;