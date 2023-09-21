
import './App.css';
import SetTimer from './components/SetTimer/SetTimer.jsx';
import CountDown from './components/CountDown/CountDown.jsx';
import React, {useState, useEffect} from 'react';

function App() {

  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);

  // used for implementing a 1 second timer
  useEffect(() => {
    if(isRunning && time > 0) {
      setTimeout(() => {setTime((prevTime) => prevTime - 1);}, 1000);
    } else {
      setIsRunning(false);
    }

  }, [isRunning,time]);

  // Update time value from input boxes when the user changes one of the values
  function updateValuesEvent(){
    const hrs = document.querySelector('#setHours');
    const min = document.querySelector('#setMinutes');
    const sec = document.querySelector('#setSeconds');

    if(!hrs.value && !min.value && !sec.value){
      return;
    }

    let hours;
    let minutes;
    let seconds;
    (!hrs.value) ? hours   = 0 : hours   = parseInt(hrs.value);
    (!min.value) ? minutes = 0 : minutes = parseInt(min.value);
    (!sec.value) ? seconds = 0 : seconds = parseInt(sec.value);

    setTime(seconds + 60*minutes + 3600*hours);
  }

  // Start the timer sequence
  function startTimerEvent(){
    setIsRunning(true);
  }

  // Stop and clear timer
  function clearTimerEvent(){
    setIsRunning(false);
    setTime(0);
  }

  return (
    <div className="App">
      {isRunning ? <CountDown clearTimerEvent={clearTimerEvent} counter={time}/>
        : <SetTimer updateValuesEvent={updateValuesEvent} 
                    startTimerEvent = {startTimerEvent}/> }
    </div>
  );
}

export default App;
