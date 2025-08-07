import React from "react";

export default function Features() {
  return (
    <section className="flat-spacing-3">
      <div className="container-3">
        <div className="banner-tagline-phonecase hover-img hover-shine">
          <div className="image shine-item img-style">
            <img
              src="/img/04.jpg"
              alt=""
              className="lazyload"
              width={759}
              height={621}
            />
          </div>
          <div className="content wow fadeInUp">
            <h4>What Make Us Different?</h4>
            <ul className="list-tagline">
              <li>
                <div className="icon">
                  <i className="icon icon-whatsapp" />
                </div>
                <div className="box-text">
                  <h6>WhatsApp-First Shopping</h6>
                  <p className="text-md">
                    No complicated checkouts – just click "Buy Now" and place your order directly via WhatsApp for a fast, personal, and secure shopping experience.
                  </p>
                </div>
              </li>
              <li>
                <div className="icon">
                  <i className="icon-quality" />
                </div>
                <div className="box-text">
                  <h6>Only Quality, No Compromise</h6>
                  <p className="text-md">
                    We source and deliver only top-grade electronics – from branded laptops to powerful server components – tested for performance and durability.
                  </p>
                </div>
              </li>
              <li>
                <div className="icon">
                  <i className="icon-support" />
                </div>
                <div className="box-text">
                  <h6>Expert Guidance, Not Just Sales</h6>
                  <p className="text-md">
                   Need help choosing the right product? Our knowledgeable team is just a message away to help you pick exactly what you need.
                  </p>
                </div>
              </li>
              <li>
                <div className="icon">
                  <i className="icon-shipping" />
                </div>
                <div className="box-text">
                  <h6>Fast Shipping & Easy Returns</h6>
                  <p className="text-md">
                    Enjoy quick delivery and a 14 to 60-day return policy for hassle-free purchases and peace of mind.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
