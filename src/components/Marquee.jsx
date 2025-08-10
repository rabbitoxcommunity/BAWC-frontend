import React from "react";

export default function Marquee() {
  const logos = [
        { img: "/img/brands/03-09.png", },
    { img: "/img/brands/03-10.png", },
    { img: "/img/brands/03-11.png", },
    { img: "/img/brands/011-01.png", },
    { img: "/img/brands/01-01.png", },
    { img: "/img/brands/01-02.png", },
    { img: "/img/brands/01-03.png", },
    { img: "/img/brands/01-04.png", },
    { img: "/img/brands/01-05.png", },
    { img: "/img/brands/01-06.png", },
    { img: "/img/brands/01-07.png", },
    { img: "/img/brands/01-08.png", },
    { img: "/img/brands/01-09.png", },
    { img: "/img/brands/01-10.png", },
    { img: "/img/brands/02-01.png", },
    { img: "/img/brands/02-02.png", },
    { img: "/img/brands/02-03.png", },
    { img: "/img/brands/02-04.png", },
    { img: "/img/brands/02-05.png", },
    { img: "/img/brands/02-06.png", },
    { img: "/img/brands/02-07.png", },
    { img: "/img/brands/02-08.png", },
    { img: "/img/brands/02-09.png", },
    { img: "/img/brands/02-10.png", },
    { img: "/img/brands/03-01.png", },
    { img: "/img/brands/03-02.png", },
    { img: "/img/brands/03-03.png", },
    { img: "/img/brands/03-04.png", },
    { img: "/img/brands/03-05.png", },
    { img: "/img/brands/03-06.png", },
    { img: "/img/brands/03-07.png", },
    { img: "/img/brands/03-08.png", },
    { img: "/img/brands/03-09.png", },
    { img: "/img/brands/03-10.png", },
    { img: "/img/brands/03-11.png", },
  ]
  return (
    <div className="marquee-sale">
      <div className="marquee-wrapper">
        <div className="initial-child-container">
          {
            logos?.map((ele, i) => {
              return (
                <>
                  <div className="marquee-child-item">
                    <img src={ele?.img} alt="" />
                  </div>
                  <div className="marquee-child-item">
                    <i className="icon-flash-star" />
                  </div>
                </>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}
