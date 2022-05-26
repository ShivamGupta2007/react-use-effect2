import React, { useRef } from 'react'
import { useState } from 'react';
import './Stopwatch.css';

const Stopwatch = () => {
    //const [timerId, setTimerId] = useState(null);
    const timerId = useRef(null);
    const [watch, setWatch] = useState(0);

    const start = () => {
        if(!timerId.current){
            let id = setInterval(() => {
                setWatch((prev) => prev+1);
            },300);
            //setTimerId(id);
            timerId.current = id;
        }   
    };
    const stop = () => {
        clearInterval(timerId.current);
        timerId.current = null;
        //setTimerId(null);
    };
    const reset = () => {
        clearInterval(timerId.current);
        setWatch(0);
        timerId.current = null;
        //setTimerId(null);
    };

  return (
    <div className="div1">
        Stopwatch  
        <h3 className="h3">{watch}</h3>
        <div className="div2">
            <button onClick ={start}>Start</button>
            <button onClick ={stop}>Stop</button>
            <button onClick ={reset}>Reset</button>
        </div>
    </div>
  );
};

export { Stopwatch }; 