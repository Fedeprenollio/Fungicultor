import React from "react";
import { FilterBTN } from "../FilterBTN";

export const Categories = ({ updatePageNumber, updateCategory,setStatus }) => {
  let categories = ["Semilla", "Sustrato", "Hongo", "Otros", "Todo"];
  return (
    <div>
      {categories.map((category, index) => {
        return (
          <FilterBTN
          setStatus={setStatus}
            task={updateCategory}
            input={category}
            updatePageNumber={updatePageNumber}
            key={index}
            name="genre"
            index={index}
          >
            {category}
          </FilterBTN>
        );
      })}
    </div>
  );
};
