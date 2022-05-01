import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  const profile = localStorage.getItem("profile");

  if (profile) {
    req.headers.Authorization = `Bearer ${JSON.parse(profile).token}`;
  }

  return req;
});

export const getAllPosts = () => API.get(`/posts`);
export const getPostById = (id) => API.get(`/posts/detail/${id}`);
export const createPost = (result) => API.post(`/posts/create`, result);
export const editPost = (id, result) => API.put(`/posts/edit/${id}`, result);
export const likePost = (id) => API.put(`/posts/like/${id}`);
export const deletePost = (id) => API.delete(`/posts/delete/${id}`);

export const signUp = (formData) => API.post(`users/signup`, formData);
export const signIn = (formData) => API.post(`users/signin`, formData);
