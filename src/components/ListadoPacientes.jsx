import Paciente from "./Paciente";

export default function ListadoPacientes() {
  return (
    <div className="md:w-1/2 lg:w-3/5">
      <h2 className="text-left text-3xl font-black"> Listado de Pacientes</h2>
      <p className="text-left text-xl">
        Administra tus{" "}
        <span className="font-bold text-indigo-700">Pacientes y Citas</span>
      </p>
      {/* Componente paciente */}
      <div className="flex h-4/6 flex-col overflow-y-auto">
      <Paciente/>
      <Paciente/>
      <Paciente/>
      <Paciente/>  <Paciente/>
      </div>
    </div>
  );
}
