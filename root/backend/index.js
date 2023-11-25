const express = require("express");
const { getUserInfo } = require("./db/db_client");

const app = express();

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

app.get("/user", async (req, res) => {
  let name = req.query.name ?? "-";
  let userInfo = await getUserInfo(name);
  console.log("Got user info:", userInfo);
  res.send(userInfo);
});

app.listen(5000, () => {
  console.log("Running on port 5000.");
});

// Export the Express API
module.exports = app;
