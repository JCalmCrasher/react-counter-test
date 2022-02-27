import { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);
  return (
    <div className="App">
      <button onClick={() => setNumber(number - 1)}>Decrease</button>
      <p data-testid="counter">{number}</p>
      <button onClick={() => setNumber(number + 1)}>Increase</button>
    </div>
  );
}

export default App;
