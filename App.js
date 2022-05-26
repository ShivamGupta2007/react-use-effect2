import { useState } from 'react';
import './App.css';
import {Timer} from './components/Timer';
import {Stopwatch} from './components/Stopwatch';
function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App" onClick={()=>setShow(!show)}>
      {show ? <Timer /> : <h1>APP</h1>}

      <h1><Stopwatch /></h1>
    </div>
  );
}

export default App;
