const express = require("express");
const axios = require("axios");
const app = express();

const cache = {}; // Stores cached content
const cacheTTL = 10 * 1000; // Cache expires after 10 seconds
const ORIGIN_URL = "http://localhost:4000"; // Origin Server URL

app.get("/content/:id", async (req, res) => {
  const id = req.params.id.trim();
  console.log("Edge1 received:", id);

  // Check if content is in cache AND not expired
  if (cache[id] && (Date.now() - cache[id].timestamp < cacheTTL)) {
    console.log("Cache HIT for", id);
    return res.send(cache[id].data);
  }

  console.log("Cache MISS for", id);

  try {
    const response = await axios.get(`${ORIGIN_URL}/content/${id}`);
    // Store data with timestamp
    cache[id] = { data: response.data, timestamp: Date.now() };
    res.send(response.data);
  } catch (err) {
    console.log("Edge1 error:", err.message);
    res.status(404).send("Content not found");
  }
});

app.listen(5000, () => {
  console.log("Edge1 server running on port 5000");
});
