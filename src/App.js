import React, {useState} from 'react'
import './index.css'

function App() {
  const [count, setcount] = useState(0)

  const handleIncrement = () =>{
    setcount(count+1);
  }

  const handleDecrement = () =>{
    setcount(count-1)
  }

  return (
    <div className="App">
        <h1>{count}</h1>
        <button onClick={handleIncrement}>Click me to Increment!</button>
        <button onClick={handleDecrement}>Click me to Decrement!</button>
    </div>
  );
}

export default App;
