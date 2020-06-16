import React, {useEffect} from 'react'; 
import {useSelector, useDispatch} from 'react-redux';
import './App.css';
import {kek} from './actions';

function App() {
  const dispatch = useDispatch();
  const x = useSelector (state => state.x1)
  //let audio = new Audio("https://drive.google.com/uc?id=1w6Ih52RKjQJ7D4WB26Ua_BEOLNRWlURO")
  let audio = new Audio("/x1.wav")

  const start = () => {
    const y=audio.cloneNode()
    y.play()
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
  });

  const handleKeyPress = (event) => {
    if(event.key === 'q'){
      start();
    }
  }

  return (
    <div className="App">
      <button onClick={start}>
        one
      </button>
      {//<input type="text" id="one" onKeyPress={start} />
}
      <br/>
    </div>
  );
}

export default App;
