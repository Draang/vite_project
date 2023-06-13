import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
export default function Paciente({ paciente,handleDelete}) {
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
      <div className="h-fit w-2/6">
        <button onClick={handleDelete} className="flex w-full justify-center rounded-3xl border-2 border-red-700 bg-transparent pb-2 pt-2 font-bold text-red-500 transition-colors hover:bg-red-700 hover:text-white active:bg-red-950">
          Eliminar
        </button>
      </div>
    </div>
  );
}
