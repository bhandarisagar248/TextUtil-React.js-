import React from "react";
import { useState,useEffect } from "react";

const TextToSpeech=(props)=>{

    const [isPause,setIsPaused]=new useState(false);
    const [utterance,setutterance]=new useState(null);

    const[voice ,setvoice]=new useState(null);



     useEffect(()=>{

        const synth=window.speechSynthesis;
        const u=new SpeechSynthesisUtterance(props.Text);

        setutterance(u);


 // Add an event listener to the speechSynthesis object to listen for the voiceschanged event
 synth.addEventListener("voiceschanged", () => {
    const voices = synth.getVoices();
    setvoice(voices[0]);
  });


        return ()=>{

            synth.cancel();
            synth.removeEventListener("voiceschanged", () => {
                setvoice(null);
              });
            };

     },[props.Text]);



     const handleplay=()=>{
        const synth=window.speechSynthesis;

        if(isPause){
            synth.resume();
            console.log(props.Text);
        }
        utterance.voice = voice;
            synth.speak(utterance);
            setIsPaused(false);
            console.log(props.Text);
    
     };

     const handlepause=()=>{

        const synth=window.speechSynthesis;
        synth.pause();
        setIsPaused(true);

     }

     const handlestop=()=>{

        const synth=window.speechSynthesis;
        synth.cancel();
        setIsPaused(false);
     }

     const handleVoiceChange = (event) => {
        const voices = window.speechSynthesis.getVoices();
        setvoice(voices.find((v) => v.name === event.target.value));
      };



        

        return(




        <>


<label className={`text-${props.Antimode}`} style={{marginRight:'5px'}}>
        Voice:
        <select value={voice?.name} onChange={handleVoiceChange}>
          {window.speechSynthesis.getVoices().map((voice) => (
            <option key={voice.name} value={voice.name}>
              {voice.name}
            </option>
          ))}
        </select>
      </label>

<button type="button" onClick={handleplay} className="btn btn-info mx-2">{isPause ?(<i class="bi bi-play-circle" style={{marginRight:'5px'}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"/>
</svg></i>):(<i class="bi bi-play" style={{marginRight:'3px'}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play" viewBox="0 0 16 16">
  <path d="M10.804 8 5 4.633v6.734zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696z"/>
</svg></i>)}{" "}
{isPause ? "Resume" : "Play"}</button>


<button type="button" onClick={handlepause} className="btn btn-info mx-2"><i className="bi bi-pause-circle" style={{marginRight:'5px'}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0z"/>
</svg></i>Pause</button>
<button type="button" onClick={handlestop} className="btn btn-info mx-2"><i className="bi bi-stop-circle" style={{marginRight:'5px'}} ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stop-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5z"/>
</svg></i>Stop</button>

            
            
            
            </>


        );
    };








export default TextToSpeech;