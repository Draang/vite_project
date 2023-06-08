import { useState } from "react";
import Header from "./components/Header";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container mx-auto mt-5">
      <Header />
    </div>
  );
}

export default App;
