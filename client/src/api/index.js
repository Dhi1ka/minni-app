import axios from "axios";

const API = axios.create({ baseURL: "https://minni-test.herokuapp.com/" });

API.interceptors.request.use((req) => {
  const profile = localStorage.getItem("profile");

  if (profile) {
    req.headers.Authorization = `Bearer ${JSON.parse(profile).token}`;
  }

  return req;
});

export const getAllPosts = (page) => API.get(`/posts?page=${page}`);
export const getPostById = (id) => API.get(`/posts/detail/${id}`);
export const fetchPostsBySearch = (searchQuery) =>
  API.get(
    `/posts/search?searchQuery=${searchQuery.search || "none"}&tags=${
      searchQuery.tags
    }`,
  );
export const createPost = (result) => API.post(`/posts/create`, result);
export const editPost = (id, result) => API.put(`/posts/edit/${id}`, result);
export const likePost = (id) => API.put(`/posts/like/${id}`);
export const commentPost = (value, id) =>
  API.post(`/posts/comment/${id}`, { value });
export const deletePost = (id) => API.delete(`/posts/delete/${id}`);

export const signUp = (formData) => API.post(`users/signup`, formData);
export const signIn = (formData) => API.post(`users/signin`, formData);
