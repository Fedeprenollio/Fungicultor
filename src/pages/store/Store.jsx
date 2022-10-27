import React, { useState } from "react";

import { CardStore } from "../../components/cards/CardStore";
import { Filter } from "../../components/filters/Filter";
import { PaginationComp } from "../../components/pagination/Pagination";
import { store } from "../../store/store";

export const Store = () => {
  let [products, setProducts] = useState(store);

  function filterCategory(e) {
    products = store;
    let copy = products;
    if (e === "Todo") {
      setProducts(store);
    } else {
      const filter = copy.filter((p) => p.category === e);
      setProducts(filter);
    }
  }

  return (
    <div>
      <div className="col-lg col-12 ">
        <div className="container gap-5">
          <div className="row ">
            <Filter updateCategory={filterCategory} />
            <div className="col-lg-8 col-12 ">
              <div className="row">
                {products.length > 0 ? (
                  products.map((product, index) => {
                    return <CardStore key={index} product={product} />;
                  })
                ) : (
                  <div className="row text-center mt-5  ">
                    {" "}
                    <h1>Nada por mostrar</h1>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <PaginationComp /> */}
    </div>
  );
};
