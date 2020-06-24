import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { soundq, soundw, sounde, sounda, sounds, soundd, soundz, soundx, soundc, } from './actions';
import 'bootstrap';
//import Slider from 'react-input-slider';

function App() {
  const dispatch = useDispatch();
  const x = useSelector(state => state.kek)
  
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
      //audio:"/inception.mp3",
      audio:"https://drive.google.com/uc?id=1GJgtOGN8dEG9OkTGe43k1ug6hyZ1wVWI",
      key: 'q',
      ref: buttonq,
      action: function () {
        return soundq();
      }
    },
    {
      //audio:"/ahhhh.mp3",
      audio:"https://drive.google.com/uc?id=1TjgL4q4fM-Gm9-EOo12mcMAuuQeTXMk9",
      key: 'w',
      ref: buttonw,
      action: function () {
        return soundw();
      }
    },
    {
      //audio:"/boom.mp3",
      audio:"https://drive.google.com/uc?id=1lJAAWrSkOUG3cBiUUUWDz69vnjEyBCjy",
      key: 'e',
      ref: buttone,
      action: function () {
        return sounde();
      }
    },
    {
      //audio:"/thx.mp3",
      audio:"https://drive.google.com/uc?id=1Be26JLoS6xsBwfx2KeC0LFtVgAs_vWTc",
      key: 'a',
      ref: buttona,
      action: function () {
        return sounda();
      }
    },
    {
      //audio:"/organ.mp3",
      audio:"https://drive.google.com/uc?id=1E3PRxSbDcNOjjGBDczDWhgD5zcbqovwY",
      key: 's',
      ref: buttons,
      action: function () {
        return sounds();
      }
    },
    {
      //audio:"/chamberchoir.mp3",
      audio:"https://drive.google.com/uc?id=1zbTclVJ0GWDQrXOglklkeXx8p0TsD0f1",
      key: 'd',
      ref: buttond,
      action: function () {
        return soundd();
      }
    },
    {
      //audio:"/drum.mp3",
      audio:"https://drive.google.com/uc?id=1d_bpmQDRCJr9qPoVH8doDPqJAiRkSETh",
      key: 'z',
      ref: buttonz,
      action: function () {
        return soundz();
      }
    },
    {
      //audio:"/darkchoir.mp3",
      audio:"https://drive.google.com/uc?id=1ejR8spUGqxwbMqtptfBlDfvf8FGHtG8z",
      key: 'x',
      ref: buttonx,
      action: function () {
        return soundx();
      }
    },
    {
      //audio:"/femalevocal.mp3",
      audio:"https://drive.google.com/uc?id=14YHuYavqQehIXw1CUaWQZk0mhcl0tQYD",
      key: 'c',
      ref: buttonc,
      action: function () {
        return soundc();
      }
    }
  ]

  function start(kek) {
    /*let x = new Audio(kek.audio)
    x.volume=volume/100
    x.play()*/
    document.getElementById((kek.key).toUpperCase()).volume=volume/100
    document.getElementById((kek.key).toUpperCase()).play()
    dispatch(kek.action())
  }
  
  const [volume, setVolume] = useState(10)
  
  const xx = y.map(x =>
    <button ref={x.ref} type="button" class="btn btn-danger drum-pad" id={x.ref} onClick={() => start(x)}>
      <audio src={x.audio} class="clip" id={(x.key).toUpperCase()}/>
      {(x.key).toUpperCase()}
    </button>
  );

  const handleKeyPress = (event) => {
    const kek = y.find(x => x.key === event.key||x.key === (event.key).toLowerCase())
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
    <div className="App" id="drum-machine">
      <div className="Keys">
        {xx}
      </div>
      <div id="display">
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
      {volume}
    </div>
  );
}

export default App;
