import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
export default function Paciente({ paciente, handleDelete ,setPaciente}) {
  const { nombreMascota, nombreP, emailP, alta, sintomas } = paciente;

  return (
    <div className="mt-5 flex items-start rounded-md bg-white p-6 shadow-md">
      <div className="w-4/6">
        <p className="mb-3 font-bold uppercase text-gray-800">
          Nombre:{" "}
          <span className="font-normal normal-case"> {nombreMascota}</span>
        </p>
        <p className="mb-3 font-bold uppercase text-gray-800">
          Propietario:{" "}
          <span className="font-normal normal-case"> {nombreP}</span>
        </p>
        <p className="mb-3 font-bold uppercase text-gray-800">
          Email: <span className="font-normal normal-case"> {emailP}</span>
        </p>
        <p className="mb-3 font-bold uppercase text-gray-800">
          Fecha alta: <span className="font-normal normal-case"> {alta}</span>
        </p>
        <p className="mb-3 font-bold uppercase text-gray-800">
          Sintomas: <span className="font-normal normal-case">{sintomas}</span>
        </p>
      </div>

      <div className="h-fit w-2/6 space-y-2.5">
        <button
          onClick={() => setPaciente(paciente)}
          className="flex w-full justify-center rounded-3xl border-2 border-transparent bg-blue-700 pb-2 pt-2 font-bold text-white  transition-colors hover:border-blue-700 hover:bg-transparent hover:text-blue-500 active:bg-blue-950 active:text-white"
        >
          Editar
        </button>
        <button
          onClick={handleDelete}
          className="flex w-full justify-center rounded-3xl border-2 border-transparent bg-red-700 pb-2 pt-2 font-bold text-white transition-colors hover:border-red-700 hover:bg-transparent   hover:text-red-500 "
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
