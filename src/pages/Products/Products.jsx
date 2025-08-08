// import Products1 from "@/components/products/Products1";

// import SubCollections3 from "@/components/products/SubCollections3";
import { Link } from "react-router-dom";
import React from "react";
// import Breadcumb from "@/components/products/Breadcumb";
import Features2 from "../home/Features2";
import MetaComponent from "@/components/MetaComponent";
import Breadcumb from "@/components/Breadcumb";
import SubCollections3 from "@/components/SubCollections3";
import ProductGrids from "./ProductGrids";
const metadata = {
  title:
    "Shop Sub Collections 02 || Vineta - Multipurpose Reactjs eCommerce Template",
  description: "Vineta - Multipurpose Reactjs eCommerce Template",
};
export default function Products() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Breadcumb />
      <SubCollections3 parentClass="flat-spacing-2" />
      <ProductGrids parentClass="flat-spacing-24 pt-0" />
      <Features2 />
    </>
  );
}
