import Breadcumb from "@/components/Breadcumb";
import { Headset, Mail, MapPinHouse, Timer } from "lucide-react";
import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Contact() {
    const breadCrumb = {
        title: "Contact",
        links: [
            { title: "Home", link: "/" },
            { title: "Contact", link: "/contact" },
        ],
    }
    return (
        <>
            <Breadcumb breadcrumbs={breadCrumb} />
            <section className="s-contact flat-spacing-13 pb-0">
                <div className="flat-wrap-iconbox">
                    <div className="container">
                        <Swiper
                            dir="ltr"
                            className="swiper tf-swiper wow fadeInUp"
                            {...{
                                slidesPerView: 1,
                                spaceBetween: 12,
                                speed: 800,
                                observer: true,
                                observeParents: true,
                                pagination: { el: ".sw-pagination-iconbox", clickable: true },
                                breakpoints: {
                                    575: { slidesPerView: 2, spaceBetween: 24 },
                                    768: { slidesPerView: 3, spaceBetween: 24 },
                                    1200: { slidesPerView: 4, spaceBetween: 100 },
                                    1440: { slidesPerView: 4, spaceBetween: 205 },
                                },
                            }}
                            modules={[Pagination]}
                        >
                            <SwiperSlide className="swiper-slide">
                                <div className="tf-icon-box style-2">
                                 <MapPinHouse strokeWidth={0.5} size={'40px'} />
                                    <div className="content">
                                        <div className="title">Address</div>
                                        <p className="desc text-grey-2">
                                           Al Raffa St - Al Fahidi - Dubai - United Arab Emirates
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="tf-icon-box style-2">
                                <Headset strokeWidth={0.5} size={'40px'} />
                                    <div className="content">
                                        <div className="title">Phone number:</div>
                                        <p className="desc text-grey-2">
                                            +971 56 415 4420
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="tf-icon-box style-2">
                                <Mail strokeWidth={0.5} size={'40px'} />
                                    <div className="content">
                                        <div className="title">Email</div>
                                        <p className="desc text-grey-2">
                                           info@baitalwahda.com
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="tf-icon-box style-2">
                                  <Timer strokeWidth={0.5} size={'40px'} />
                                    <div className="content">
                                        <div className="title">Open</div>
                                        <p className="desc text-grey-2">
                                           9am - 10pm, Everyday
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <div className="d-flex d-xl-none sw-dot-default sw-pagination-iconbox justify-content-center" />
                        </Swiper>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="wg-map">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d225.51798629836125!2d55.2896568!3d25.2609029!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43e1aa487ed5%3A0xb95ff1239bec9fcc!2sBAIT%20AL%20WAHDA%20COMPUTERS%20TRADING%20L.L.C!5e0!3m2!1sen!2sin!4v1754795127130!5m2!1sen!2sin"
                                    className="map"
                                    style={{ border: "none" }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
}
