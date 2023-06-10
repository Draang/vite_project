import { useState } from "react";
import Header from "./components/Header";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  const [pacientes, setPacientes] = useState([]);

  return (
    <div className="container mx-auto  h-screen">
       <Header />
      <div className="mx-auto mt-12 h-5/6 space-x-6 md:flex"> 
       <Formulario setPacientes={setPacientes} pacientes={pacientes}/>
       <ListadoPacientes setPacientes={setPacientes} pacientes={pacientes}/>
      </div>
    </div>
  );
}

export default App;
