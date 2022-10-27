import React from "react";
import { Footer } from "../foot/Footer";
import { Variedades } from "./Variedades";

export const Learn = () => {
  return (
    <div className="container-fluid d-flex-column prueba m-3 ">
     




      <Variedades />



      <div className="container-fluid">
        <h3>Links de interes</h3>
        <div className="col">
          <div className="row">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.agroconsultoraplus.com/producir-hongos/"
            >
              ¿Qué se necesita para producir hongos comestibles?
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.agroconsultoraplus.com/producir-hongos/"
            >
              ¿Qué se necesita para producir hongos comestibles?
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.agroconsultoraplus.com/producir-hongos/"
            >
              ¿Qué se necesita para producir hongos comestibles?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
