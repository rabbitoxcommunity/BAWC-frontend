import { API_IMAGE_BASE_URL } from "@/config/configuration";
import { getBrands } from "@/redux/actionCreator";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Marquee from "react-fast-marquee";


export default function MarqueeLogo() {

  const [brands, setBrands] = useState([])

  const dispatch = useDispatch()

  const fetchBrands = () => {
    dispatch(getBrands((res) => {
      setBrands(res);
    }));
  }

  useEffect(() => {
    fetchBrands()
  }, []);

  return (
    <div className="marquee-brands">
      <Marquee >
        {
          brands?.map((ele, i) => {
            return (
              <div className="marquee_item" key={i}>
                <div className="marquee_child">
                  <img src={API_IMAGE_BASE_URL + ele?.image} alt="" />
                </div>
                <div className="marquee_child">
                  <i className="icon-flash-star" />
                </div>
              </div>
            )
          })
        }
      </Marquee>
    </div>
  );
}
