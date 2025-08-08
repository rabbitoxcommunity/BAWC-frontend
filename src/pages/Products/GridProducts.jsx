import React from "react";
import ProductCard1 from "./ProductCard1";
import { products1 } from "@/data/products";

export default function GridProducts({
  cardStyleClass,
  tooltipDirection = "left",
}) {
  return (
    <>
      {products1?.map((product, i) => (
        <ProductCard1
          key={i}
          product={product}
          styleClass={cardStyleClass ? cardStyleClass : "grid style-1"}
          tooltipDirection={tooltipDirection}
        />
      ))}
    </>
  );
}
