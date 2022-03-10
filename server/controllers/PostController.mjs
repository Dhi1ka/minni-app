import mongoose from "mongoose";
import Post from "../models/Post.mjs";

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();

    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getPostsById = async (req, res) => {};

export const createPost = async (req, res) => {
  const newPost = req.body;
  const createdPost = new Post(newPost);

  try {
    await createdPost.save();

    res.status(201).json(createdPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const editPost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).json({
      message: `Post with id ${_id} not found!`,
    });

  const result = await Post.findByIdAndUpdate(_id, post, { new: true });

  res.status(201).json(result);
};

export const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ message: `Post with id ${id} not found!` });

  await Post.findByIdAndRemove(id);

  res.status(200).json({ message: "Delete successfully!" });
};

export const likePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ message: `Post with id ${id} not found!` });

  const post = await Post.findById(id);
  const resultLike = await Post.findByIdAndUpdate(
    id,
    { likeCount: post.likeCount + 1 },
    { new: true },
  );

  res.status(200).json(resultLike);
};
