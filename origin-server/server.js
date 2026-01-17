const express = require("express");
const app = express();

// Content stored in origin server
const contentStore = {
  "image1": "This is image 1 data",
  "image2": "This is image 2 data",
  "video1": "This is video 1 data",
  "video2": "This is video 2 data",
  "file1": "This is file 1 data",
  "file2": "This is file 2 data"
};

app.get("/content/:id", (req, res) => {
  const id = req.params.id.trim();  // Remove extra spaces/newlines
  console.log("Request received for id:", JSON.stringify(id));

  if (contentStore[id]) {
    res.send(contentStore[id]);
  } else {
    res.status(404).send("Content not found");
  }
});

app.listen(4000, () => console.log("Origin server running on port 4000"));
