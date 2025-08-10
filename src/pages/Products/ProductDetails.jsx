import { allProducts } from "@/data/products";
import React from "react";
import { useParams } from "react-router-dom";
import Details from "./Details";
import MetaComponent from "@/components/MetaComponent";
import ProductBreadcrumb from "./ProductBreadcrumb";
const metadata = {
  title: "Product || Leading IT Product Supplier in GCC and Africa | BAIT AL WAHDA",
  description: "BAWC || Leading IT Product Supplier in GCC and Africa | BAIT AL WAHDA",
};
export default function ProductDetails() {
  let params = useParams();
  const id = params.id;

  const product = allProducts.filter((p) => p.id == id)[0] || allProducts[0];
  return (
    <>
      <MetaComponent meta={metadata} />
      <ProductBreadcrumb product={product} />
      <Details product={product} />
    </>
  );
}
