const express = require("express");
const axios = require("axios");

const app = express();

// List of edge servers
const edges = ["http://localhost:5000", "http://localhost:6000"];
let counter = 0; // Round-robin counter

app.get("/content/:id", async (req, res) => {
  const id = req.params.id.trim();
  console.log("Router received request for:", id);

  // Pick edge server using round-robin
  const edgeUrl = edges[counter % edges.length];
  counter++;

  try {
    const response = await axios.get(`${edgeUrl}/content/${id}`);
    res.send(response.data);
  } catch (err) {
    console.log("Router error message:", err.message);

    if (err.response) {
      console.log("Edge response status:", err.response.status);
      console.log("Edge response data:", err.response.data);
    } else {
      console.log("No response from edge server");
    }

    res.status(404).send("Content not found on edge servers");
  }
});

app.listen(7000, () => {
  console.log("Router server running on port 7000");
});
