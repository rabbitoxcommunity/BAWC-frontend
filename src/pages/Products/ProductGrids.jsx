"use client";
import { useEffect, useReducer, useState } from "react";
import { initialState, reducer } from "@/reducer/filterReducer";
import { products } from "@/data/products";
import ListProducts from "./ListProducts";
import LayoutHandler from "./LayoutHandler";
import GridProducts from "./GridProducts";
import FilterModal from "./FilterModal";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "@/redux/actionCreator";
import NoData from "@/components/NoData";
import { updateRedux } from "@/redux/commonReducer";
import { useInView } from "react-intersection-observer";

export default function ProductGrids({
  fullWidth = false,
  cardStyleClass,
  tooltipDirection,
  parentClass = "flat-spacing-24",
}) {
  const [activeLayout, setActiveLayout] = useState(4);
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch()

  const filters = useSelector((state) => state.commonReducer.filters);
  const selectedSort = filters.sort || '';
  const hasFilters = (filters?.category && filters.category !== "") || (filters?.brands && filters.brands.length > 0) || (filters?.sort && filters.sort !== "default");



  const fetchProducts = (pageNum = 1, reset = false) => {
    setLoading(true);
    dispatch(
      getProducts(
        {
          category: filters?.category,
          brand: filters?.brands,
          sort: filters?.sort,
          page: pageNum,
          limit: 24,
        },
        (res) => {
          if (reset) {
            setProducts(res?.data); // replace when filters change
          } else {
            setProducts((prev) => [...prev, ...res?.data]); // append
          }
          setPage(res?.pagination?.page);
          setTotalPages(res?.pagination?.totalPages);
          setLoading(false);
        }
      )
    );
  };

  // 👇 Reset on filters change
  useEffect(() => {
    setPage(1);
    fetchProducts(1, true);
  }, [filters]);





  const sortOptions = [
    { label: "Sort by (Default)", value: "newest" },
    { label: "Price Low to High", value: "lowToHigh" },
    { label: "Price High to Low", value: "highToLow" },
    { label: "Newest", value: "newest" },
    // { label: "Oldest", value: "oldest" },
  ];
  const selectedLabel = sortOptions.find((opt) => opt.value === selectedSort)?.label || "Sort by (Default)";

  const handleSortChange = (value) => {
    dispatch(
      updateRedux({
        key: "filters",
        value: { categories: [], brands: [], sort: value },
      })
    );
  };

  const handleClearFilters = () => {
    dispatch(updateRedux({ key: "filters", value: {} }));
  };

  const handlePageClick = (p) => {
    if (p !== page && p > 0 && p <= totalPages) {
      // onPageChange(p);
      setPage(p)
    }
  };
  return (
    <>
      <section className={parentClass}>
        <div className={fullWidth ? "container-full" : "container"}>
          {
            loading ? <div className="main_loader">
              <div className="page_loader"></div>
            </div> :

              (
                <>


                  <div className="tf-shop-control">
                    <div className="tf-group-filter">
                      <a
                        href="#filterShop"
                        data-bs-toggle="offcanvas"
                        aria-controls="filterShop"
                        className="tf-btn-filter"
                      >
                        <span className="icon icon-filter" />
                        <span className="text">Filter</span>
                      </a>
                      <div className="tf-dropdown-sort" data-bs-toggle="dropdown">
                        <div className="btn-select">
                          <span className="text-sort-value">{selectedLabel}</span>
                          <span className="icon icon-arr-down" />
                        </div>
                        <div className="dropdown-menu">
                          {sortOptions.map((elm, i) => (
                            <div
                              key={i}
                              className={`select-item ${selectedSort === elm.value ? "active" : ""
                                }`}
                              onClick={() => handleSortChange(elm.value)}
                            >
                              <span className="text-value-item">{elm.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      {hasFilters && (
                        <button
                          id="remove-all"
                          className="remove-all-filters"
                          onClick={handleClearFilters}
                        >
                          <i className="icon icon-close"></i> Clear all filter
                        </button>
                      )}

                    </div>
                    <ul className="tf-control-layout">
                      <LayoutHandler
                        setActiveLayout={setActiveLayout}
                        activeLayout={activeLayout}
                      />
                    </ul>
                  </div>

                  <div className="wrapper-control-shop">
                    {
                      products?.length > 0 || loading ?
                        <div
                          className={`wrapper-shop tf-grid-layout tf-col-${activeLayout}`}
                          id="gridLayout"
                        >

                          <GridProducts
                            cardStyleClass={cardStyleClass}
                            tooltipDirection={tooltipDirection}
                            products={products}
                          />



                        </div> : <NoData />

                    }

                    {/* Pagination */}
                    {page < totalPages && (
                      <div className="text-center mt-4 flex justify-center col-span-4">
                        {/* <button

                  className="btn-primary"
                >
                  {loading ? "Loading..." : "Load More"}
                </button> */}
                        <button
                          className="btn-primary"
                          onClick={() => fetchProducts(page + 1)}
                          disabled={loading}
                        >
                          {loading ? (
                            <span className="flex items-center gap-2">
                              Loading..
                              <div
                                className="spinner-grow"
                                style={{ height: "10px", width: "10px", marginLeft: "10px" }}
                                role="status"
                              ></div>
                            </span>
                          ) : (
                            "Load More"
                          )}
                        </button>
                      </div>
                    )}

                  </div>
                </>
              )

          }

          
        </div>
      </section>
      <FilterModal />
    </>
  );
}
