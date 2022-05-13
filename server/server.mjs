import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

const app = express();

app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

dotenv.config();

import router from "./router/index.mjs";
app.use(router);

app.use("/", (req, res) => {
  res.status(404).json({
    message: "404 Page Not Found",
  });
});

const PORT = +process.env.PORT || 5000;

mongoose
  .connect(
    "mongodb://dhi1ka:m1nN1IzeAs@minni-test-shard-00-00.j85xu.mongodb.net:27017,minni-test-shard-00-01.j85xu.mongodb.net:27017,minni-test-shard-00-02.j85xu.mongodb.net:27017/minni-db?ssl=true&replicaSet=atlas-ormeyb-shard-0&authSource=admin&retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  )
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server listening on http://localhost:${PORT}`),
    ),
  )
  .catch((error) => console.error(error));
