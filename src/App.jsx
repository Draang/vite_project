import { useState, useEffect } from "react";
import Header from "./components/Header";
import "./App.css";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});
  useEffect(() => {
    const obtenerLS =()=>{

   const tmpPacientes =JSON.parse( localStorage.getItem("paciente"))?? [];
   console.log(tmpPacientes)
    if (tmpPacientes.lenght > 0) {
      setPacientes(tmpPacientes);
    }}
    obtenerLS();
  }, []); 
  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);
  return (
    <div className="container mx-auto  h-screen">
      <Header />
      <div className="mx-auto mt-12 h-5/6 space-x-6 md:flex">
        <Formulario
          setPacientes={setPacientes}
          pacientes={pacientes}
          paciente={paciente}
        />
        <ListadoPacientes
          setPacientes={setPacientes}
          pacientes={pacientes}
          setPaciente={setPaciente}
        />
      </div>
    </div>
  );
}

export default App;
