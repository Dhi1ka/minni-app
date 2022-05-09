import * as api from "../api";
import {
  CREATE,
  GET_ALL,
  GET_BY_ID,
  GET_BY_SEARCH,
  UPDATE,
  DELETE,
} from "../constants/actionTypes";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.getAllPosts();

    dispatch({ type: GET_ALL, payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const getPostById = (id) => async (dispatch) => {
  try {
    const { data } = await api.getPostById(id);

    dispatch({ type: GET_BY_ID, payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const getPostsBySearch = (searchQuery) => async (dispatch) => {
  try {
    const {
      data: { data },
    } = await api.fetchPostsBySearch(searchQuery);

    dispatch({ type: GET_BY_SEARCH, payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const {
      data: { data },
    } = await api.createPost(post);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const editPost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.editPost(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.error(error);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.error(error);
  }
};
