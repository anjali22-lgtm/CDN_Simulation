# CDN_Simulation


---

## 🔹 Features

- **Origin Server:** Stores all content (images, videos, files). Responds to edge server requests when cache miss occurs.
- **Edge Servers:** Maintain cache for faster access and reduced load on the origin server.
- **Router / API Gateway:** Direct client requests to the appropriate edge server based on routing logic.
- **Cache Mechanism:** Returns cached content immediately if available; otherwise, fetches from the origin server.
- **Scalable Architecture:** Supports multiple edge servers for load balancing and performance improvement.

---

## 🔹 Technologies Used

- Node.js
- Express.js
- Axios (for HTTP requests)
- Postman (for testing)

---

## 🔹 How to Run

1. Clone the repository:

```bash
git clone https://github.com/anjali22-lgtm/CDN_Simulation.git
cd CDN_Simulation
