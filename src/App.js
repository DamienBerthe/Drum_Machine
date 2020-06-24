import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { soundq, soundw, sounde, sounda, sounds, soundd, soundz, soundx, soundc, } from './actions';
import 'bootstrap';
//import Slider from 'react-input-slider';

function App() {
  const dispatch = useDispatch();
  const x = useSelector(state => state.kek)
  //let audio = new Audio("https://drive.google.com/uc?id=1w6Ih52RKjQJ7D4WB26Ua_BEOLNRWlURO")
  const buttonq = useRef(null);
  const buttonw = useRef(null);
  const buttone = useRef(null);
  const buttona = useRef(null);
  const buttons = useRef(null);
  const buttond = useRef(null);
  const buttonz = useRef(null);
  const buttonx = useRef(null);
  const buttonc = useRef(null);

  let y = [
    {
      //audio: new Audio("/inception.wav"),
      audio:"/inception.wav",
      key: 'q',
      ref: buttonq,
      action: function () {
        return soundq();
      }
    },
    {
      //audio: new Audio("/ahhhh.mp3"),
      audio:"/ahhhh.mp3",
      key: 'w',
      ref: buttonw,
      action: function () {
        return soundw();
      }
    },
    {
      //audio: new Audio("/boom.wav"),
      audio:"/boom.wav",
      key: 'e',
      ref: buttone,
      action: function () {
        return sounde();
      }
    },
    {
      //audio: new Audio("/thx.wav"),
      audio:"/thx.wav",
      key: 'a',
      ref: buttona,
      action: function () {
        return sounda();
      }
    },
    {
      //audio: new Audio("/organ.wav"),
      audio:"/organ.wav",
      key: 's',
      ref: buttons,
      action: function () {
        return sounds();
      }
    },
    {
      //audio: new Audio("/chamberchoir.wav"),
      audio:"/chamberchoir.wav",
      key: 'd',
      ref: buttond,
      action: function () {
        return soundd();
      }
    },
    {
      //audio: new Audio("/drum.wav"),
      audio:"/drum.wav",
      key: 'z',
      ref: buttonz,
      action: function () {
        return soundz();
      }
    },
    {
      //audio: new Audio("/darkchoir.wav"),
      audio:"/darkchoir.wav",
      key: 'x',
      ref: buttonx,
      action: function () {
        return soundx();
      }
    },
    {
      //audio: new Audio("/femalevocal.wav"),
      audio:"/femalevocal.wav",
      key: 'c',
      ref: buttonc,
      action: function () {
        return soundc();
      }
    }
  ]
  //.map pour boutons
  //.find pour handleKeyPress
  function start(kek) {
    //kek.audio.volume=volume/100
    //kek.audio.play()
    let x = new Audio(kek.audio)
    x.volume=volume/100
    x.play()
    //kek.audio.load()
    //kek.audio.cloneNode().play()
    //let x=kek.audio.cloneNode()
    //x.volume=volume/100
    //x.play()
    dispatch(kek.action())
  }
  
  //const [state, setState] = useState({ x: 10});
  const [volume, setVolume] = useState(10)
/*
function changeVolume(){
    for(let i=0;i<y.length;i++){
      y[i].audio.volume=volume/100;
    }
  }
*/
  

  const xx = y.map(x =>
    <button ref={x.ref} type="button" class="btn btn-danger" onClick={() => start(x)}>{x.key}</button>
  );

  const handleKeyPress = (event) => {
    const kek = y.find(x => x.key === event.key)
    if (kek) {
      kek.ref.current.focus();
      kek.ref.current.click();
    }
  }
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    }
  });

  return (
    <div className="App">
      <div className="Keys">
        {xx}
      </div>
      <div className="Preview">
        {x}
      </div>
      <input
          type="range"
          min={0}
          max={100}
          step={1}
          value={volume}
          onChange={event => {
            setVolume(event.target.valueAsNumber)
            //setVolume(event.target.value)
          }}
        />
      {/*<Slider
        x={state.x}
        onChange={({ x }) => {setState(state => ({ ...state, x }))}}
      />
      {state.x}*/}
      {volume}
    </div>
  );
}

export default App;
