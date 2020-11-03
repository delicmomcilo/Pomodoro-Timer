import React, { useState, useEffect } from 'react';
import './App.css';
import Break from './components/Break';
import Session from './components/Session';
import Timer from './components/Timer';
import MySnackbar from './components/MySnackbar';
import Snackbar from '@material-ui/core/Snackbar';
import TextField from '@material-ui/core/TextField';

function App() {
  const [currentSession, setCurrentSession] = useState('Session');
  const [speed, setSpeed] = useState(1000);
  const [sessionCounter, setSessionCounter] = useState(1);
  const [message, setMessage] = useState('');
  const [intervalId, setIntervalId] = useState(null);
  const [breakLength, setBreakLength] = useState(10*60);
  const [sessionLength, setSessionLength] = useState(25*60);
  const [time, setTime] = useState(sessionLength);

  useEffect(() => {
      setTime(sessionLength);
  }, [sessionLength]);

  const handleSpeed = (event) => {
    setSpeed(event.target.value);
  };

  const decSessionLength = () => {
      const newSessionLength = sessionLength - 60;
      // Ternary expression JSX
      newSessionLength > 0 && setSessionLength(newSessionLength);
  }

  const incSessionLength = () => {
      const newSessionLength = sessionLength + 60;
      newSessionLength <= 60*60 && setSessionLength(newSessionLength);
  }

  const decBreakLength = () => {
      const newBreakLength = breakLength - 60;
      newBreakLength > 0 && setBreakLength(newBreakLength);
  }

  const incBreakLength = () => {
    const newBreakLength = breakLength + 60;
    newBreakLength <= 60*60 && setBreakLength(newBreakLength)
  }
  
  const handleResetSession = () => {
    clearInterval(intervalId);
    setIntervalId(null);
    setCurrentSession('Session');
    setSessionLength(25*60);
    setBreakLength(10*60)
    setTime(25*60);
}

  const handleResetButton = () => {
    handleResetSession();
    setMessage('');
    setSessionCounter(1);
  }
  

  const isStarted = intervalId !== null;
  const handleStartStop = () => {
  let qwe;
  if(isStarted) {
      clearInterval(intervalId);
      setIntervalId(null);
  } else {
      const newIntervalId = setInterval(() => {
          setTime(prevTime => {
              const newTime = prevTime - 1;
              if(newTime >= 0){
                  return newTime;
              }
              if(currentSession === 'Session'){
                  setCurrentSession('Break');
                  return breakLength;
              }
              else if(currentSession === 'Break'){
                  setCurrentSession('Session');
                  return sessionLength;
              }
          })
      }, speed);
      setIntervalId(newIntervalId);
      }
  };

  useEffect(() => {
    if(currentSession === 'Break' && time === 0) {
      setSessionCounter(sessionCounter => sessionCounter + 1);
      setMessage("Congrats! You finished your "+ sessionCounter + " session")
      handleResetSession();
    }
  }, [time === 0]) 

  return (
    <div className="App">
      <Break
        disabled={isStarted}
        breakLength={breakLength}
        decBreakLength={decBreakLength}
        incBreakLength={incBreakLength}
      />
      <Session
        disabled={isStarted} 
        sessionLength={sessionLength} 
        decSessionLength={decSessionLength} 
        incSessionLength={incSessionLength}/>
        <Timer
        handleStartStop={handleStartStop} 
        time={time}
        breakLength={breakLength} 
        sessionLength={sessionLength} 
        timerLabel={currentSession} 
        startStopLabel={isStarted ? "Stop" : "Start"}
        handleResetButton={handleResetButton}
        />
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          open={message !== ''}
        >
          <MySnackbar message={message}/>
        </Snackbar>
        <TextField disabled={isStarted} onChange={handleSpeed} style={{marginTop: "2%"}} label="Speed value" helperText="For testing purposes" value={speed}/>
    </div>
  );
}

export default App;
