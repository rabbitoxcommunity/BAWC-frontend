import React from "react";

export default function Topbar() {

  const topbarContent = [
    { title: "Limited-Time Offer – Don’t Miss Out!" },
    { title: "Lifetime Warranty on Select Products" },
    { title: "Extended Returns: Now up to 60 Days" },
        { title: "Limited-Time Offer – Don’t Miss Out!" },
    { title: "Lifetime Warranty on Select Products" },
    { title: "Extended Returns: Now up to 60 Days" },
        { title: "Limited-Time Offer – Don’t Miss Out!" },
    { title: "Lifetime Warranty on Select Products" },
    { title: "Extended Returns: Now up to 60 Days" },
  ]
  return (
    <div className="tf-topbar bg-dark-5 topbar-bg">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-xl-12 overflow-hidden">
            <div className="topbar-center marquee-wrapper">
              <div className="initial-child-container">
                {
                  topbarContent?.map((ele, i) => {
                    return (
                      <div key={i}>
                        <div className="marquee-child-item">
                          <p>{ele?.title}</p>
                        </div>
                        <div className="marquee-child-item">
                          <span className="dot" />
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
