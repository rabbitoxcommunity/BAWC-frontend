import React from "react";
import ProductCard11 from "./ProductCard11";
import { productMenuItems } from "@/data/menu";
import { products1 } from "@/data/products";


export default function ListProducts() {
  return (
    <>
      {products1?.map((product, i) => (
        <ProductCard11 key={i} product={product} />
      ))}
    </>
  );
}
