import React from "react";
import { CardVideo } from "../../components/cards/CardVideo";
import { recipes, videos } from "../../multimedia/multimedia";

export const Recipes = () => {
  return (
    <div className="container-fluid  text-center">
      <div>Recipes</div>
      <h3>Recetas simples</h3>
      <div className="col-lg col-12  text-center ">
        <div className="row row-cols-1 gap-2  ">
          {videos.map((video, index) => {
            return <CardVideo key={index} URL={video} />;
          })}
        </div>
        <div className="row">
          {recipes.map((r) => {
            return (
              <div className="container  text-center">
                <iframe
                  width="560"
                  height="315"
                  src={r.src}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
