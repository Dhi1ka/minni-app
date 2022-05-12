import * as api from "../api";
import {
  CREATE,
  GET_ALL,
  GET_BY_ID,
  GET_BY_SEARCH,
  UPDATE,
  DELETE,
  START_LOADING,
  END_LOADING,
} from "../constants/actionTypes";

export const getPosts = (page) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.getAllPosts(page);

    dispatch({ type: GET_ALL, payload: data });

    dispatch({ type: END_LOADING });
  } catch (error) {
    console.error(error);
  }
};

export const getPostById = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.getPostById(id);

    dispatch({ type: GET_BY_ID, payload: data });

    dispatch({ type: END_LOADING });
  } catch (error) {
    console.error(error);
  }
};

export const getPostsBySearch = (searchQuery) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const {
      data: { data },
    } = await api.fetchPostsBySearch(searchQuery);

    dispatch({ type: GET_BY_SEARCH, payload: data });

    dispatch({ type: END_LOADING });
  } catch (error) {
    console.error(error);
  }
};

export const createPost = (post, navigate) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.createPost(post);

    navigate("/posts/" + data._id);

    dispatch({ type: CREATE, payload: data });

    dispatch({ type: END_LOADING });
  } catch (error) {
    console.error(error);
  }
};

export const editPost = (id, post) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.editPost(id, post);

    dispatch({ type: UPDATE, payload: data });

    dispatch({ type: END_LOADING });
  } catch (error) {
    console.error(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    await api.deletePost(id);

    dispatch({ type: DELETE, payload: id });

    dispatch({ type: END_LOADING });
  } catch (error) {
    console.error(error);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.likePost(id);

    dispatch({ type: UPDATE, payload: data });

    dispatch({ type: END_LOADING });
  } catch (error) {
    console.error(error);
  }
};
