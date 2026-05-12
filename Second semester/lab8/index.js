const express = require("express");
const AuthProxy = require("./authProxy");

const app = express();

const proxy = new AuthProxy("jwt", "student-token-123");

app.get("/posts", async (req, res) => {
  try {
    const data = await proxy.send("https://jsonplaceholder.typicode.com/posts");

    res.json(data.slice(0, 5));
  } catch (error) {
    res.status(500).json({
      message: "Request error",
    });
  }
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
    