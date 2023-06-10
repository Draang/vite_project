import { useState, useEffect } from "react";

export default function Formulario(props) {
  const { pacientes, setPacientes } = props;
  const [nombreMascota, setNombreMascota] = useState("");
  const [nombreP, setNombreP] = useState("");
  const [emailP, setEmailP] = useState("");
  const [alta, setAlta] = useState("");
  const [sintomas, setSintomas] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const tmpPaciente = {
      nombreMascota,
      nombreP,
      emailP,
      alta,
      sintomas,
    };
    setPacientes([...pacientes,tmpPaciente])
  };
  return (
    <div className="h-auto md:w-1/2 lg:w-2/5">
      <h2 className="text-left text-3xl font-black">Seguimeinto pacientes</h2>
      <p className="text-left text-xl">
        Añade Pacientes y{" "}
        <span className="font-bold text-indigo-700">Administralos</span>
      </p>
      <form
        className="mt-4 rounded-md bg-white px-5 py-10 shadow-md"
        onSubmit={handleSubmit}
      >
        <div className="mb-2">
          <label
            className="block font-bold text-gray-800"
            htmlFor="nombreMascota"
          >
            Nombre de Mascota
          </label>
          <input
            id="nombreMascota"
            type="text"
            placeholder="Nombre de mascotas"
            className="mt-1 w-full rounded-md border-2 p-2 placeholder-slate-500"
            value={nombreMascota}
            onChange={(e) => setNombreMascota(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label className="block font-bold text-gray-800" htmlFor="nombreP">
            Nombre de Propietario
          </label>
          <input
            id="nombreP"
            type="text"
            placeholder="Nombre de propietario"
            className="mt-1 w-full rounded-md border-2 p-2 placeholder-slate-500"
            value={nombreP}
            onChange={(e) => setNombreP(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label className="block font-bold text-gray-800" htmlFor="emailP">
            Email de Propietario
          </label>
          <input
            id="emailP"
            type="email"
            value={emailP}
            onChange={(e) => setEmailP(e.target.value)}
            placeholder="Email de contacto"
            className="mt-1 w-full rounded-md border-2 p-2 placeholder-slate-500"
          />
        </div>
        <div className="mb-2">
          <label className="block font-bold text-gray-800" htmlFor="alta">
            Fecha de alta
          </label>
          <input
            id="alta"
            type="date"
            value={alta}
            onChange={(e) => setAlta(e.target.value)}
            className="mt-1 w-full rounded-md border-2 p-2 placeholder-slate-500"
          />
        </div>
        <div className="mb-2">
          <label className="block font-bold text-gray-800" htmlFor="sintomas">
            Sintomas
          </label>
          <textarea
            id="sintomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
            placeholder="Describa los sintomas de la mascota"
            className="mt-1 w-full rounded-md border-2 p-2 placeholder-slate-500"
          />
        </div>
        <input
          type="submit"
          className="w-full cursor-pointer rounded-md bg-indigo-500 p-3 font-extrabold text-white transition-transform hover:bg-indigo-700 hover:font-bold"
        />
      </form>
    </div>
  );
}
