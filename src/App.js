import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { soundq, soundw, sounde, sounda, sounds, soundd, soundz, soundx, soundc, } from './actions';
import 'bootstrap';

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
      audio:"https://raw.githubusercontent.com/Nvejqygroqxk/Drum_Machine/master/public/inception.mp3",
      key: 'q',
      ref: buttonq,
      action: function () {
        return soundq();
      }
    },
    {
      //audio:"/ahhhh.mp3",
      audio:"https://raw.githubusercontent.com/Nvejqygroqxk/Drum_Machine/master/public/ahhhh.mp3",
      key: 'w',
      ref: buttonw,
      action: function () {
        return soundw();
      }
    },
    {
      //audio:"/boom.mp3",
      audio:"https://raw.githubusercontent.com/Nvejqygroqxk/Drum_Machine/master/public/boom.mp3",
      key: 'e',
      ref: buttone,
      action: function () {
        return sounde();
      }
    },
    {
      //audio:"/thx.mp3",
      audio:"https://raw.githubusercontent.com/Nvejqygroqxk/Drum_Machine/master/public/thx.mp3",
      key: 'a',
      ref: buttona,
      action: function () {
        return sounda();
      }
    },
    {
      //audio:"/organ.mp3",
      audio:"https://raw.githubusercontent.com/Nvejqygroqxk/Drum_Machine/master/public/organ.mp3",
      key: 's',
      ref: buttons,
      action: function () {
        return sounds();
      }
    },
    {
      //audio:"/chamberchoir.mp3",
      audio:"https://raw.githubusercontent.com/Nvejqygroqxk/Drum_Machine/master/public/chamberchoir.mp3",
      key: 'd',
      ref: buttond,
      action: function () {
        return soundd();
      }
    },
    {
      //audio:"/drum.mp3",
      audio:"https://raw.githubusercontent.com/Nvejqygroqxk/Drum_Machine/master/public/drum.mp3",
      key: 'z',
      ref: buttonz,
      action: function () {
        return soundz();
      }
    },
    {
      //audio:"/darkchoir.mp3",
      audio:"https://raw.githubusercontent.com/Nvejqygroqxk/Drum_Machine/master/public/darkchoir.mp3",
      key: 'x',
      ref: buttonx,
      action: function () {
        return soundx();
      }
    },
    {
      //audio:"/femalevocal.mp3",
      audio:"https://raw.githubusercontent.com/Nvejqygroqxk/Drum_Machine/master/public/femalevocal.mp3",
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
