import { updateRedux } from '@/redux/commonReducer';
import React from 'react'
import { useDispatch } from 'react-redux';

export default function NoData() {
    const dispatch = useDispatch();

    const clearFilters = () => {
        dispatch(updateRedux({ key: "filters", value: {} }));
    };
    return (
        <section className="flat-spacing">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="wg-404">
                            {/* <div className="image">
                                <img src="/img/404.png" data-src="./img/404.png" alt="404" className=" ls-is-cached lazyloaded"/>
                            </div> */}
                            <h1 className="title display-xl-2">
                                No search results found
                            </h1>
                            <p className="text-md sub text-main">We couldn’t find the products you were looking for.</p>
                            <div className="bot">
                                <div onClick={clearFilters} className="tf-btn btn-md animate-btn font-4 cursor-pointer">
                                    Clear Filter
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
