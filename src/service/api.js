import axios from "axios";

const usersUrl = "http://localhost:8080/users";

export const getStripeCoupons = async (coupons) => {
  return await axios.get(`${usersUrl}/get-stripe-coupons`, coupons);
};

export const createStripeCoupons = async (coupon) => {
  return await axios.post(`${usersUrl}/create-stripe-coupons`, coupon);
};
export const deleteStripeCoupons = async (id) => {
  return await axios.delete(`${usersUrl}/delete/${id}`);
};
export const signIn = async (formData) => {
  return await axios.post(`${usersUrl}/signin`, formData);
};
export const signUp = async (formData) => {
  return await axios.post(`${usersUrl}/signup`, formData);
};
