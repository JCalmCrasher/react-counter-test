import { useState } from "react";
import "./App.css";

function App() {
  const [number, ] = useState(0);

  return (
    <div className="App">
      <button>Decrease</button>
      <p data-testid="counter">{number}</p>
      <button>Increase</button>
    </div>
  );
}

export default App;
