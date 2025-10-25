const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// allow cross-origin requests
app.use(cors());

const uri = process.env.MONGODB_URI;

// 連接 MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once("open", () => {
  console.log("connected to database");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`now listening for requests on port ${PORT}`);
});
