import { allProducts } from "@/data/products";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Details from "./Details";
import MetaComponent from "@/components/MetaComponent";
import ProductBreadcrumb from "./ProductBreadcrumb";
import { useDispatch } from "react-redux";
import { getProductById } from "@/redux/actionCreator";
const metadata = {
  title: "Product || Leading IT Product Supplier in GCC and Africa | BAIT AL WAHDA",
  description: "BAWC || Leading IT Product Supplier in GCC and Africa | BAIT AL WAHDA",
};
export default function ProductDetails() {
  const [detail, setDetail] = useState({})
  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    dispatch(getProductById(id, (res) => {
      setDetail(res);
    }))
  }, [])
  return (
    <>
      <MetaComponent meta={metadata} />
      <ProductBreadcrumb product={detail} />
      <Details detail={detail} />
    </>
  );
}
