import React, {useEffect} from 'react'; 
import {useSelector, useDispatch} from 'react-redux';
import './App.css';
//import {kek} from './actions';
import {soundq, soundw, sounde, sounda, sounds, soundd, soundz, soundx, soundc,} from './actions';

function App() {
  const dispatch = useDispatch();
  const x = useSelector (state => state.kek)
  //let audio = new Audio("https://drive.google.com/uc?id=1w6Ih52RKjQJ7D4WB26Ua_BEOLNRWlURO")
  let audio1 = new Audio("/inception.wav")
  let audio2 = new Audio("/ahhhh.mp3")
  let audio3 = new Audio("/boom.wav")
  let audio4 = new Audio("/thx.wav")
  let audio5 = new Audio("/organ.wav")
  let audio6 = new Audio("/chamberchoir.wav")
  let audio7 = new Audio("/drum.wav")
  let audio8 = new Audio("/darkchoir.wav")
  let audio9 = new Audio("/femalevocal.wav")

  const startq = () => {
    const y=audio1.cloneNode()
    y.play()
    dispatch(soundq())
  }

  const startw = () => {
    const y=audio2.cloneNode()
    y.play()
    dispatch(soundw())
  }

  const starte = () => {
    const y=audio3.cloneNode()
    y.play()
    dispatch(sounde())
  }

  const starta = () => {
    const y=audio4.cloneNode()
    y.play()
    dispatch(sounda())
  }

  const starts = () => {
    const y=audio5.cloneNode()
    y.play()
    dispatch(sounds())
  }

  const startd = () => {
    const y=audio6.cloneNode()
    y.play()
    dispatch(soundd())
  }

  const startz = () => {
    const y=audio7.cloneNode()
    y.play()
    dispatch(soundz())
  }

  const startx = () => {
    const y=audio8.cloneNode()
    y.play()
    dispatch(soundx())
  }

  const startc = () => {
    const y=audio9.cloneNode()
    y.play()
    dispatch(soundc())
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
  });

  const handleKeyPress = (event) => {
    if(event.key === 'q'){
      startq();
    }
    if(event.key === 'w'){
      startw();
    }
    if(event.key === 'e'){
      starte();
    }
    if(event.key === 'a'){
      starta();
    }
    if(event.key === 's'){
      starts();
    }
    if(event.key === 'd'){
      startd();
    }
    if(event.key === 'z'){
      startz();
    }
    if(event.key === 'x'){
      startx();
    }
    if(event.key === 'c'){
      startc();
    }
  }

  return (
    <div className="App">
      <button onClick={startq}>
        q
      </button>
      <button onClick={startw}>
        w
      </button>
      <button onClick={starte}>
        e
      </button>
      <button onClick={starta}>
        a
      </button>
      <button onClick={starts}>
        s
      </button>
      <button onClick={startd}>
        d
      </button>
      <button onClick={startz}>
        z
      </button>
      <button onClick={startx}>
        x
      </button>
      <button onClick={startc}>
        c
      </button>
      {x}
      <br/>
    </div>
  );
}

export default App;
