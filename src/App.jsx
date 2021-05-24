import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <p className="text-4xl text-blue-700">Hello Vite + React!</p>
      </header>
    </div>
  );
}

export default App;
