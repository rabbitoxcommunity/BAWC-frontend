import React from "react";
import ReturnPolicies from "@/components/ReturnPolicies";

export default function ProductDescription({product}) {
    return (
        <section className="flat-spacing pt-0">
            <div className="container">
                <div className="widget-accordion wd-product-descriptions border-0">
                    <div
                        className="accordion-title collapsed"
                        data-bs-target="#description"
                        data-bs-toggle="collapse"
                        aria-expanded="true"
                        aria-controls="description"
                        role="button"
                    >
                        <span>Descriptions</span>
                        <span className="icon icon-arrow-down" />
                    </div>
                    <div id="description" className="collapse show">
                        <div className="accordion-body widget-desc">
                            <div className='text_editor' dangerouslySetInnerHTML={{ __html: product?.description }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
