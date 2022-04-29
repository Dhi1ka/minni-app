import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/User.mjs";

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existUser = await User.findOne({ email });

    if (!existUser) return res.status(404).json({ message: "User not found!" });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existUser.password,
    );

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials!" });

    const token = jwt.sign(
      {
        id: existUser._id,
        email: existUser.email,
      },
      "test",
      { expiresIn: "1h" },
    );

    res.status(200).json({ result: existUser, token });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const signup = async (req, res) => {
  const { firstName, lastName, email, password, confirmPassword } = req.body;
  try {
    const existUser = await User.findOne({ email });

    if (existUser)
      return res.status(400).json({ message: "User already exist!" });

    if (password !== confirmPassword)
      return res.status(400).json({ message: "Password doesn't match!" });

    const hashPass = await bcrypt.hash(password, 12);

    const result = await User.create({
      email,
      password: hashPass,
      name: `${firstName} ${lastName}`,
    });

    const token = jwt.sign(
      {
        id: result._id,
        email: result.email,
      },
      "test",
      { expiresIn: "1h" },
    );

    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json(error);
  }
};
