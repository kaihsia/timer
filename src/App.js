
import { useEffect, useState } from 'react';

function App() {
  const [ timer, setTimer ] = useState(0)
  const [ start, setStart ] = useState(false)

  useEffect(() => {
    if (start) {
      const interval = setInterval(() => {
        setTimer(prevState => prevState + 1)
      }, 1000)
  
      return () => clearInterval(interval)
    }
  }, [start, timer])

  const handleStart = () => {
    setStart(true)
  }

  return (
    <div className="App">
      <p>{timer}</p>
      <button onClick={handleStart}>Start</button>
    </div>
  );
}

export default App;
