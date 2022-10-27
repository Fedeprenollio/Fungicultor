import React from "react";
import { Cards } from "../../components/cards/Cards";
import { photos } from "../../multimedia/multimedia";

export const Galery = () => {
  return (
    <div className="container-fluid d-flex-column prueba ">
      <div>Galery</div>
      <h3>Fotos de las variedades</h3>
      <div className="col-lg col-12 ">
        <div className="row gap-5">
          {photos.map((photo, index) => {
            return <Cards key={index} URL={photo} />;
          })}
        </div>
      </div>
     
    </div>
  );
};
