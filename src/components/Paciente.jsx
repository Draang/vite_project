import React from "react";

export default function Paciente() {
  return (
    <div className="mt-5 rounded-md bg-white p-6 shadow-md">
      <p className="mb-3 font-bold uppercase text-gray-800">
        Nombre: <span className="font-normal normal-case"> Nombre</span>
      </p>
      <p className="mb-3 font-bold uppercase text-gray-800">
        Propietario: <span className="font-normal normal-case"> Nombre</span>
      </p>
      <p className="mb-3 font-bold uppercase text-gray-800">
        Email: <span className="font-normal normal-case"> Nombre</span>
      </p>
      <p className="mb-3 font-bold uppercase text-gray-800">
        Fecha alta: <span className="font-normal normal-case"> Nombre</span>
      </p>
      <p className="mb-3 font-bold uppercase text-gray-800">
        Sintomas:{" "}
        <span className="font-normal normal-case">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
          debitis a, et fugiat reprehenderit deleniti, iste fugit ex doloremque
          illum ipsa tempore, mollitia numquam! Reprehenderit aliquid enim dolor
          reiciendis et?
        </span>
      </p>
    </div>
  );
}
