import axios from "axios";

const url = "https://api-minni.herokuapp.com";

export const getAllPosts = () => axios.get(`${url}/posts`);
export const createPost = (result) => axios.post(`${url}/posts/create`, result);
export const editPost = (id, result) =>
  axios.put(`${url}/posts/edit/${id}`, result);
export const deletePost = (id) => axios.delete(`${url}/posts/delete/${id}`);

export const likePost = (id) => axios.put(`${url}/posts/like/${id}`);
