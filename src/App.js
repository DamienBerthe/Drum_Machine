import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './App.css';
import {kek} from './actions';

function App() {
  const dispatch = useDispatch();
  const x = useSelector (state => state.x1)
  let audio = new Audio("https://drive.google.com/uc?id=1w6Ih52RKjQJ7D4WB26Ua_BEOLNRWlURO")
  //let audio = new Audio("/x1.wav")
  const start = () => {
    const y=audio.cloneNode()
    y.play()
  }
  return (
    <div className="App">
      <button onClick={start}>
        one
      </button>
      <br/>
    </div>
  );
}

export default App;
