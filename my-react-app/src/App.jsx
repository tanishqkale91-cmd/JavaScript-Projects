import { useState } from 'react'
import Button from './Button';
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <Button onClick={() => setCount(count + 1)} label="Increment"/>
<Button onClick={() => { if(count > 0) setCount(count - 1)}} label="Decrement"/>
<Button onClick={() => setCount(0)} label="Reset"/>
    </div>
  );
}

export default App;