import { useState } from "react";
import HomeScreen from "./HomeScreen";
import "./App.css";
import React from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <HomeScreen />
    </div>
  );
}

export default App;
