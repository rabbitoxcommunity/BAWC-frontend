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
  title: "Products || Leading IT Product Supplier in GCC and Africa | BAIT AL WAHDA",
  description: "Leading IT Product Supplier in GCC and Africa | BAIT AL WAHDA",
};
export default function Products() {
      const breadCrumb = {
        title: "Products",
        links: [
            { title: "Home", link: "/" },
            { title: "Products", link: "/products" },
        ],
    }
  return (
    <>
      <MetaComponent meta={metadata} />
      <Breadcumb breadcrumbs={breadCrumb} />
      <SubCollections3 parentClass="flat-spacing-2" />
      <ProductGrids parentClass="flat-spacing-24 pt-0" />
      <Features2 />
    </>
  );
}
