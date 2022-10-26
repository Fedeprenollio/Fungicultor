import React from "react";
import { CardVideo } from "../../components/cards/CardVideo";
import { videos } from "../../multimedia/multimedia";

export const Recipes = () => {
  return (
    <>
      <div>Recipes</div>
      <h3>Recetas simples</h3>
      <div className="col-lg col-12 ">
        <div className="row">
      {videos.map((video,index)=>{
        return(
            <CardVideo key={index} URL={video}/>
        )
      })}
      </div>
      </div>
    </>
  );
};
