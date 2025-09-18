// @ts-nocheck

import axios from "axios";
import { updateRedux } from "./commonReducer";
import { toast } from "react-toastify";
import axiosInstance from "../utils/axiosInterceptor";
import { API_BASE_URL } from "../config/configuration";

export function successToast(msg) {
  toast.success(msg, {
    position: "bottom-center",
    autoClose: 3000,
  });
}
export function errorToast(msg) {
  toast.error(msg, {
    position: "bottom-center",
    autoClose: 3000,
  });
}

export const getCategories = (callback) => (dispatch) => {
  axiosInstance
    .get(`${API_BASE_URL}categories`)
    .then((res) => {
      if (res) {
        callback && callback(res?.data?.data);
      } else {
        toast.error("Something went wrong.", {
          position: "bottom-center",
          autoClose: 3000,
        });
      }
    })
    .catch((err) => {
      callback && callback(err?.response?.data?.message);
      toast.error(err?.response?.data?.message, {
        position: "bottom-center",
        autoClose: 3000,
      });
    }).finally({

    });
};



// BRANDS



export const getBrands = (callback) => (dispatch) => {
  axiosInstance
    .get(`${API_BASE_URL}brands`)
    .then((res) => {
      if (res) {
        callback && callback(res?.data?.data);
      } else {
        toast.error("Something went wrong.", {
          position: "bottom-center",
          autoClose: 3000,
        });
      }
    })
    .catch((err) => {
      callback && callback(err?.response?.data?.message);
      toast.error(err?.response?.data?.message, {
        position: "bottom-center",
        autoClose: 3000,
      });
    }).finally({

    });
};




export const getBanners = (callback) => (dispatch) => {
  axiosInstance
    .get(`${API_BASE_URL}banners`)
    .then((res) => {
      if (res) {
        callback && callback(res?.data?.data);
      } else {
        toast.error("Something went wrong.", {
          position: "bottom-center",
          autoClose: 3000,
        });
      }
    })
    .catch((err) => {
      callback && callback(err?.response?.data?.message);
      toast.error(err?.response?.data?.message, {
        position: "bottom-center",
        autoClose: 3000,
      });
    }).finally({

    });
};



// PRODUCTS


export const getProducts = (params = {},callback) => (dispatch) => {
  axiosInstance
    .get(`${API_BASE_URL}products`,{ params })
    .then((res) => {
      if (res) {
        callback && callback(res?.data);
      } else {
        toast.error("Something went wrong.", {
          position: "bottom-center",
          autoClose: 3000,
        });
      }
    })
    .catch((err) => {
      callback && callback(err?.response?.data?.message);
      toast.error(err?.response?.data?.message, {
        position: "bottom-center",
        autoClose: 3000,
      });
    }).finally({

    });
};


export const getProductById = (id, callback) => (dispatch) => {
  axiosInstance
    .get(`${API_BASE_URL}products/${id}`)
    .then((res) => {
      if (res) {
        callback && callback(res?.data?.data);
      } else {
        toast.error("Something went wrong.", {
          position: "bottom-center",
          autoClose: 3000,
        });
      }
    })
    .catch((err) => {
      callback && callback(err?.response?.data?.message);
      toast.error(err?.response?.data?.message, {
        position: "bottom-center",
        autoClose: 3000,
      });
    }).finally({

    });
};
