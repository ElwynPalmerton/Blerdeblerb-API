require("dotenv").config();
const express = require("express");
var createError = require("http-errors");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const chalk = require("chalk");

var usersRouter = require("./routes/users");
var feedRouter = require("./routes/feed");
var followingRouter = require("./routes/following");
const cors = require("cors");

const app = express();

if (process.env.NODE_ENV === "production") {
  app.use((req, res, next) => {
    if (req.header("x-forwarded-proto") !== "https")
      res.redirect(`https://${req.header("host")}${req.url}`);
    else next();
  });
}

// Serve static files from the React app
// todo: Doesn't need to serve static files since UI is deployed separately (remove)
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "client/build")));

app.use("/feed", feedRouter);
app.use("/users", usersRouter);
app.use("/following", followingRouter);

app.get("/test", async (req, res) => {
  console.log("hello test");
  return res
    .status(200)
    .send(
      `Hello Test! ${process.env.MONGODB_URI} - ${process.env.ENVIRONMENT}`
    );
});

let port = 8080;

if (process.env.ENVIRONMENT === "docker") {
  port = 5000;
}

app.listen(port, () => {
  console.log(`Blerdeblerb listening on ${port}`);
});
