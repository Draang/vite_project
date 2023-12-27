import { useEffect } from "react";
import Paciente from "./Paciente";

export default function ListadoPacientes(props) {
  const { pacientes, setPacientes, setPaciente } = props;
  const handleDelete = (index) => {
    let tmpPacientes = [...pacientes];
    tmpPacientes.splice(index, 1);
    setPacientes(tmpPacientes);
  };
  return (
    <div className="md:w-1/2 lg:w-3/5">
      <h2 className="text-left text-3xl font-black"> Listado de Pacientes</h2>
      <p className="text-left text-xl">
        Administra tus{" "}
        <span className="font-bold text-indigo-700">Pacientes y Citas</span>
      </p>
      {/* Componente paciente */}
      <div className="flex h-full flex-col overflow-y-auto">
        {pacientes.map((v, i, array) => (
          <Paciente
            key={v.key}
            paciente={v}
            handleDelete={() => handleDelete(i)}
            setPaciente={setPaciente}
          />
        ))}
      </div>
    </div>
  );
}
