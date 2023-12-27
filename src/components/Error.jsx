import { useState, useEffect } from "react";

export default function Error({errorText,setError}) {
  return (
    <div
    className="mb-3 mt-3 rounded-lg border-2 border-red-600 bg-red-400 p-2 text-center font-medium uppercase text-white  duration-75 active:ease-in"
    onClick={() => setError(false)}
  >
    <p>{errorText}</p>
  </div>
  )
}
