import { useStopwatch } from 'react-timer-hook';

function MyStopwatch() {
  const {
    seconds,
    minutes,
    hours,
    days,
    // isRunning,
    start,
    pause,
    // reset,
  } = useStopwatch({ autoStart: true });
  return (
    <div onClick={ ()=>{pause===true ? start() : pause()}} className="game__timer" style={{textAlign: 'center'}}>
      <div className="game__timer__font" style={{fontSize: '3rem', color:"gold"}}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      {/* <p>{isRunning ? 'Running' : 'Not running'}</p> */}
      {/* <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button> */}
    </div>
  );
  }

  export default MyStopwatch;