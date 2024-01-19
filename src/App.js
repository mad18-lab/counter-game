import { React, useEffect, useState } from 'react';  //using the Reactjs use-state hook for the counter function of the buttons and use-effect for the timer

function App() {
  const [Count, setCount] = useState(0);  //Count will be our initial count (0), and setCount will be changed everytime we click a button
  const [seconds, setSeconds] = useState(15);   //our timer with an initial state 15
  const [timer, setTimer] = useState(false);    //to begin or stop timer
  
  useEffect(() => {
    let interval;

    //setting up the timer using setInterval method
    if (timer && seconds > 0) {
      interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds - 1)
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timer, seconds]);

  const beginValue = () => {
    setTimer(true);
  }

  const resetValue = () => {
    setSeconds(15);
    setTimer(false);
  }
  
  return (
    //bootstrap container class of margin top and bottom, value 5
    <div className='container my-5'>
      <div className='card text-center my-5'>
        <div className='card-body'>
          <h1 className='display-3'> Clicking Game </h1>
          <p className='lead my-3'> Click the maximum number of times within the given time limit. The player with the most clicks wins. </p>
          <div className='my-5'>
            <div className='d-flex justify-content-around'>
              <div class="col-md-8 ml-auto">
                <button className='btn btn-primary mx-3' onClick={beginValue} disabled={Count > 0}>Start</button>
                <button className='btn btn-primary mx-3' onClick={resetValue}>Reset</button>
              </div>
              <div class="col-md-8">
                <h4 className='display-5 ml-auto'>{seconds}</h4>
              </div>
            </div>
            <h2 className='my-5'>{Count}</h2>
            <button className='btn btn-outline-success mx-3' onClick={() => setCount(Count + 1)} disabled={seconds===0}>Player 1</button>
            <button className='btn btn-outline-danger mx-3' onClick={() => setCount(Count + 1)} disabled={seconds===0}>Player 2</button>
            <button className='btn btn-secondary mx-3' onClick={() => setCount(0)}>Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
