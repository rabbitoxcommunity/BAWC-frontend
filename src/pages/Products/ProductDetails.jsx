import { allProducts } from "@/data/products";
import React from "react";
import { useParams } from "react-router-dom";
import Details from "./Details";
import Breadcumb from "./Breadcrumb";
import MetaComponent from "@/components/MetaComponent";
const metadata = {
  title: "Product Details || Vineta - Multipurpose Reactjs eCommerce Template",
  description: "Vineta - Multipurpose Reactjs eCommerce Template",
};
export default function ProductDetails() {
  let params = useParams();
  const id = params.id;

  const product = allProducts.filter((p) => p.id == id)[0] || allProducts[0];
  return (
    <>
      <MetaComponent meta={metadata} />
      <Breadcumb product={product} />
      <Details product={product} />
    </>
  );
}
