const express = require("express");
const AuthProxy = require("./authProxy");

const app = express();

const proxy = new AuthProxy("jwt", "student-token-123");

app.get("/posts", async (req, res) => {
  try {
    const data = await proxy.send("https://jsonplaceholder.typicode.com/posts");

    res.status(200).json(data.slice(0, 5));
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

app.get("/change-auth", (req, res) => {
  proxy.changeAuth("apiKey", "api-key-111");

  res.json({
    message: "Auth changed",
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
