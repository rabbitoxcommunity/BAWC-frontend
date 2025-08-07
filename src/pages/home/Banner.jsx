import React from "react";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <section className="s-banner-countdown banner-cd-phonecase">
      <div className="banner-wrap">
        <div className="banner-content text-center">
          <div className="box-title">
            <h4>Safe Purchase via WhatsApp</h4>
            <p className="sub text-md">Secure your order instantly through WhatsApp – no payment gateway needed.</p>
          </div>
          <div className="box-countdown">
            <div className="wg-countdown">
              <span
                className="js-countdown d-flex justify-content-center"
                data-timer={900610}
                data-labels="Days,Hours,Mins,Secs"
              >
                {/* <CountdownTimer style={2} /> */}
              </span>
            </div>
          </div>
          <div className="box-btn">
            <Link to={`/products`} className="tf-btn fw-normal animate-btn">
              Shop Now
            </Link>
          </div>
        </div>
        <div className="image">
          <img
            src="/img/03.jpg"
            alt=""
            className="lazyload effect-paralax"
            width={1840}
            height={738}
          />
        </div>
      </div>
    </section>
  );
}
