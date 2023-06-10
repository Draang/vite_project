import { useState } from "react";
import Header from "./components/Header";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container mx-auto mt-5">
       <Header />
      <div className="mx-auto mt-12  space-x-6 md:flex"> 
       <Formulario/>
       <ListadoPacientes/>
      </div>
    </div>
  );
}

export default App;
