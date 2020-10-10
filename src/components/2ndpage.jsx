import React, { useState, useEffect } from 'react';
import {Button} from "reactstrap";
import timecalc from "./helper"



function Second() {  
   

    const[elapsed,setelapsed]=useState(0);
    const[play,setplay]=useState(false);
    const[mute,setmute]=useState(true);
    useEffect(()=>{
      let interval = null;
     if (elapsed===0) {
        setmute(true);
        setplay(false)
      }
      else  if (play) {
        interval = setInterval(() => {
          setelapsed(elapsed => elapsed - 1000);
        }, 1000);
        setmute(false);
      }
      else if(!play){
        clearInterval(interval);
        setmute(true)
      }
      return () => clearInterval(interval);
    },[play,elapsed,mute]);
  
    
    const time=timecalc(elapsed);
    return (
      <div className="app">
        <video autoPlay muted loop id="myVideo">
      <source src="/Videos/bel.mp4" type="video/mp4"/>
    </video>
    <div className="text-center row play align-items-center" onClick={()=>setplay(!play)}>
  { play? <i className="fa fa-pause-circle" aria-hidden="true"/>:<i className="fa fa-play-circle" aria-hidden="true"/>}
    </div>
    <div className="row text-center align-items-center ">
      <h1 className="time">{time}</h1>
    </div>
    <div className="row buttonrow">
    <Button outline className="col-2" onClick={()=>setelapsed(2*60*1000)} >02 min</Button>
    <Button outline className="col-2  offset-1" onClick={()=>setelapsed(5*60*1000)}>05 min</Button>
    <Button outline className="col-2  offset-1" onClick={()=>setelapsed(10*60*1000)}>10 min</Button>
    <Button outline className="col-2  offset-1" onClick={()=>setelapsed(15*60*1000)}>15 min</Button>
  
    </div>
    <audio controls loop muted={mute} className="none" autoPlay>
  <source src="/Audios/audio.mp3" type="audio/mp3" />
</audio>
      </div>
  
    );


  }

  export default Second;