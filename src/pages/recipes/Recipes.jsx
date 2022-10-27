import React from "react";
import { CardVideo } from "../../components/cards/CardVideo";
import { recipes, videos } from "../../multimedia/multimedia";

export const Recipes = () => {
  return (
    <div className="container-fluid  ">
      <h1>Recetas</h1>
      <h3>Recetas simples</h3>
      <div className="col-lg col-12  ">
        <div className="row row-cols-1 gap-2   ">
          {videos.map((video, index) => {
            return <CardVideo key={index} URL={video} />;
          })}
        </div>

        {recipes.map((r) => {
          return (
            <div >
              <div
                className="ratio ratio-16x9 my-2 mx-auto"
                style={{ maxWidth: "80%" }}
              >
                <iframe
                  className="mx-auto"
                  src={r.src}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
